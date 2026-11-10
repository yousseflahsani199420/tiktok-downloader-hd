(function () {
  "use strict";

  const config = window.DOWNLOADER_CONFIG || {};
  const platformKey = String(config.platformKey || "").toLowerCase();
  const alwaysShowFallback = !!config.alwaysShowFallback;
  const state = {
    mode: config.defaultMode || "hd",
    media: null,
    sourceUrl: ""
  };

  const urlInput = document.getElementById("urlInput");
  const pasteBtn = document.getElementById("pasteBtn");
  const findBtn = document.getElementById("findBtn");
  const modeButtons = Array.from(document.querySelectorAll(".mode-btn"));
  const statusBox = document.getElementById("statusBox");
  const previewEmpty = document.getElementById("previewEmpty");
  const resultBox = document.getElementById("resultBox");
  const mediaPreview = document.getElementById("mediaPreview");
  const audioPreview = document.getElementById("audioPreview");
  const previewFallback = document.getElementById("previewFallback");
  const metaTitle = document.getElementById("metaTitle");
  const metaSub = document.getElementById("metaSub");
  const downloadBtn = document.getElementById("downloadBtn");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");
  const altBtn = document.getElementById("altBtn");

  const trackingParams = [
    "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
    "feature", "si", "fbclid", "igshid", "ig_rid", "tt_from", "is_copy_url",
    "is_from_webapp", "sender_device"
  ];

  const validHosts = Array.isArray(config.validHosts) ? config.validHosts : [];
  if (!urlInput || !findBtn || !downloadBtn) return;

  function setStatus(message, type) {
    if (!statusBox) return;
    if (!message) {
      statusBox.textContent = "";
      statusBox.style.display = "none";
      return;
    }
    statusBox.textContent = message;
    statusBox.className = "status " + (type || "ok");
    statusBox.style.display = "block";
  }

  function setFindBusy(isBusy) {
    findBtn.disabled = isBusy;
    findBtn.textContent = isBusy ? "Finding..." : "Find Video";
  }

  function setDownloadBusy(isBusy) {
    downloadBtn.disabled = isBusy;
    downloadBtn.textContent = isBusy ? "Downloading..." : "Download Now";
  }

  function resetProgress() {
    if (!progressFill || !progressBar) return;
    progressFill.style.width = "0%";
    progressBar.style.display = "none";
  }

  function showProgress(percent) {
    if (!progressFill || !progressBar) return;
    progressBar.style.display = "block";
    progressFill.style.width = Math.max(0, Math.min(100, percent)) + "%";
  }

  function setAlternativeButtonVisible(isVisible) {
    if (!altBtn) return;
    altBtn.style.display = (alwaysShowFallback || isVisible) ? "block" : "none";
  }

  function blurActiveControl() {
    const active = document.activeElement;
    if (active && typeof active.blur === "function") active.blur();
  }

  function sanitizeFilename(value) {
    return (value || "downloaded_media")
      .replace(/[^a-z0-9]/gi, "_").replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "").slice(0, 80) || "downloaded_media";
  }

  function hostMatches(hostname) {
    if (!validHosts.length) return true;
    return validHosts.some((allowedHost) => {
      const normalizedHost = String(allowedHost || "").toLowerCase().trim();
      return hostname === normalizedHost || hostname.endsWith("." + normalizedHost);
    });
  }

  function normalizeInputUrl(input) {
    const raw = (input || "").trim();
    if (!raw) return "";
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : "https://" + raw;
    try {
      const parsed = new URL(withProtocol);
      if (!hostMatches(parsed.hostname.toLowerCase())) return "";
      trackingParams.forEach((param) => parsed.searchParams.delete(param));
      return parsed.toString();
    } catch {
      return "";
    }
  }

  function updateMode(nextMode) {
    state.mode = nextMode;
    modeButtons.forEach((btn) => {
      const active = btn.dataset.mode === nextMode;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (state.media && metaSub) metaSub.textContent = "Mode: " + state.mode.toUpperCase();
  }

  function pickMediaUrl(payload) {
    if (payload && typeof payload.url === "string" && payload.url) return payload.url;
    if (payload && Array.isArray(payload.picker) && payload.picker.length) {
      const pick = payload.picker.find((item) => item && (item.url || item.src)) || payload.picker[0];
      if (pick && typeof pick.url === "string") return pick.url;
      if (pick && typeof pick.src === "string") return pick.src;
    }
    return "";
  }

  function pickCoverUrl(payload) {
    const objects = [payload, payload && payload.video, payload && payload.metadata, payload && payload.info];
    if (payload && Array.isArray(payload.picker)) objects.push(...payload.picker);
    const keys = ["thumbnail", "thumbnailUrl", "thumbnail_url", "cover", "coverUrl", "cover_url", "poster", "image", "imageUrl"];
    for (const obj of objects) {
      if (!obj || typeof obj !== "object") continue;
      for (const key of keys) {
        if (typeof obj[key] === "string" && obj[key].trim()) return obj[key].trim();
      }
    }
    return "";
  }

  function titleFromPayload(payload, fallbackUrl) {
    if (payload && typeof payload.filename === "string" && payload.filename) {
      return payload.filename.replace(/\.[a-z0-9]{2,5}$/i, "");
    }
    try {
      return (config.platformName || "Social") + " - " + new URL(fallbackUrl).hostname;
    } catch {
      return (config.platformName || "Social") + " media";
    }
  }

  async function fetchFromCobalt(sourceUrl, mode) {
    const endpoints = Array.isArray(config.apiEndpoints) && config.apiEndpoints.length
      ? config.apiEndpoints
      : [config.apiEndpoint || "https://downloadapi.stuff.solutions/api/json"];
    const requestBody = {
      url: sourceUrl,
      isAudioOnly: mode === "audio",
      filenameStyle: "pretty"
    };
    if (mode === "audio") requestBody.aFormat = "mp3";

    let lastError = "Could not fetch media.";
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(requestBody)
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || payload.status === "error") {
          lastError = (payload && (payload.text || (payload.error && payload.error.code))) || "Could not fetch media.";
          continue;
        }
        const mediaUrl = pickMediaUrl(payload);
        if (!mediaUrl) {
          lastError = "No downloadable file was returned.";
          continue;
        }
        return {
          url: mediaUrl,
          title: titleFromPayload(payload, sourceUrl),
          cover: pickCoverUrl(payload),
          type: mode === "audio" ? "audio" : "video"
        };
      } catch (error) {
        lastError = (error && error.message) ? error.message : "Could not fetch media.";
      }
    }
    throw new Error(lastError);
  }

  function clearPreviewSources() {
    if (mediaPreview) {
      mediaPreview.pause();
      mediaPreview.removeAttribute("src");
      mediaPreview.removeAttribute("poster");
      mediaPreview.load();
      mediaPreview.hidden = true;
    }
    if (audioPreview) {
      audioPreview.pause();
      audioPreview.removeAttribute("src");
      audioPreview.load();
      audioPreview.hidden = true;
    }
    if (previewFallback) {
      previewFallback.textContent = "Video preview is unavailable from this media source. You can still try Download Now.";
      previewFallback.hidden = true;
    }
  }

  function showMediaPreview(media) {
    clearPreviewSources();
    if (!mediaPreview || !audioPreview) return;

    if (media.type === "audio") {
      audioPreview.src = media.url;
      audioPreview.hidden = false;
      audioPreview.load();
      return;
    }

    if (media.cover) mediaPreview.poster = media.cover;
    mediaPreview.src = media.url;
    mediaPreview.hidden = false;
    mediaPreview.load();
  }

  if (mediaPreview) {
    mediaPreview.addEventListener("error", () => {
      mediaPreview.hidden = true;
      if (previewFallback) {
        previewFallback.textContent = "Video preview is unavailable from this media source. You can still try Download Now.";
        previewFallback.hidden = false;
      }
    });
    mediaPreview.addEventListener("loadedmetadata", () => {
      if (previewFallback) previewFallback.hidden = true;
    });
  }
  if (audioPreview) {
    audioPreview.addEventListener("loadedmetadata", () => {
      if (previewFallback) previewFallback.hidden = true;
    });
    audioPreview.addEventListener("error", () => {
      audioPreview.hidden = true;
      if (previewFallback) {
        previewFallback.textContent = "Audio preview is unavailable from this media source. You can still try Download Now.";
        previewFallback.hidden = false;
      }
    });
  }

  async function responseToBlobWithProgress(response, onProgress) {
    if (!response.body || typeof response.body.getReader !== "function") {
      onProgress(100);
      return response.blob();
    }
    const totalSize = Number.parseInt(response.headers.get("content-length") || "0", 10);
    const reader = response.body.getReader();
    const chunks = [];
    let loadedSize = 0;
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      chunks.push(part.value);
      loadedSize += part.value.byteLength;
      if (totalSize > 0) onProgress(Math.round((loadedSize / totalSize) * 100));
    }
    if (totalSize === 0) onProgress(95);
    return new Blob(chunks);
  }

  function fallbackOpenSource(url) {
    const openedWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (!openedWindow) {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  }

  async function findMedia() {
    blurActiveControl();
    const normalizedUrl = normalizeInputUrl(urlInput.value);
    if (!normalizedUrl) {
      setStatus("Please enter a valid " + (config.platformName || "social") + " URL.", "err");
      previewEmpty.style.display = "block";
      resultBox.style.display = "none";
      state.media = null;
      clearPreviewSources();
      downloadBtn.disabled = true;
      setAlternativeButtonVisible(false);
      return;
    }

    state.sourceUrl = normalizedUrl;
    urlInput.value = normalizedUrl;
    setFindBusy(true);
    setStatus("", "ok");
    setAlternativeButtonVisible(false);
    resetProgress();
    downloadBtn.disabled = true;
    clearPreviewSources();

    try {
      const media = await fetchFromCobalt(normalizedUrl, state.mode);
      state.media = media;
      if (metaTitle) metaTitle.textContent = media.title;
      if (metaSub) metaSub.textContent = "Mode: " + state.mode.toUpperCase();
      showMediaPreview(media);
      previewEmpty.style.display = "none";
      resultBox.style.display = "block";
      downloadBtn.disabled = false;
      setAlternativeButtonVisible(false);
      setStatus("Media found. Preview it here, then click Download Now.", "ok");
    } catch (error) {
      state.media = null;
      clearPreviewSources();
      previewEmpty.style.display = "block";
      resultBox.style.display = "none";
      downloadBtn.disabled = true;
      setAlternativeButtonVisible(true);
      const fallbackMessage = alwaysShowFallback
        ? "Primary server is busy. Click Open Alternative Downloader."
        : (error.message || "Could not fetch media for this URL.");
      setStatus(fallbackMessage, "err");
    } finally {
      setFindBusy(false);
    }
  }

  async function downloadMedia() {
    blurActiveControl();
    if (!state.media || !state.media.url) {
      setStatus("Find media first.", "err");
      return;
    }
    setDownloadBusy(true);
    showProgress(0);
    try {
      const response = await fetch(state.media.url);
      if (!response.ok) throw new Error("download-fail");
      const blob = await responseToBlobWithProgress(response, showProgress);
      showProgress(100);
      const ext = state.media.type === "audio" ? "mp3" : "mp4";
      const filename = sanitizeFilename(state.media.title) + "_" + state.mode + "." + ext;
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setStatus("Downloaded: " + filename, "ok");
    } catch {
      setStatus("Direct download blocked by browser. Opening source URL instead.", "err");
      fallbackOpenSource(state.media.url);
    } finally {
      setDownloadBusy(false);
      window.setTimeout(resetProgress, 900);
      blurActiveControl();
    }
  }

  if (pasteBtn) {
    pasteBtn.addEventListener("click", async () => {
      try {
        const clipText = await navigator.clipboard.readText();
        urlInput.value = (clipText || "").trim();
        setStatus("", "ok");
      } catch {
        setStatus("Clipboard access is blocked in this browser.", "err");
      }
    });
  }

  modeButtons.forEach((btn) => btn.addEventListener("click", () => updateMode(btn.dataset.mode)));
  findBtn.addEventListener("click", findMedia);
  downloadBtn.addEventListener("click", downloadMedia);

  if (altBtn) {
    setAlternativeButtonVisible(false);
    altBtn.addEventListener("click", () => fallbackOpenSource(config.fallbackUrl || "https://download.stuff.solutions"));
  }

  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      findMedia();
    }
  });
})();
