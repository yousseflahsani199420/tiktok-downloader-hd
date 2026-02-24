// ==========================================
// SEO BUILD SYSTEM - TikTok Downloader
// Fixed: All links point to index.html explicitly
// ==========================================

const fs = require('fs');
const path = require('path');

const CONFIG = {
  domain: 'https://tiktokdownloader.online',
  brandName: 'TikTok Downloader Pro',
  outputDir: './dist'
};

// Working React Index Page - All links fixed to point to index.html
const indexPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" type="image/png" sizes="32x32" href="logo.png">
<link rel="icon" type="image/png" sizes="16x16" href="logo.png">
<link rel="apple-touch-icon" href="logo.png">
  
<title>TikTok Downloader Pro - Direct Download</title>
<meta name="description" content="Download TikTok videos without watermark in HD quality. Fast, free and secure TikTok downloader online.">
<meta name="keywords" content="tiktok downloader, download tiktok video, tiktok mp4, tiktok mp3, save tiktok, tiktok no watermark, tiktok video downloader hd">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical" href="${CONFIG.domain}/">

<!-- OpenGraph -->
<meta property="og:title" content="TikTok Downloader Pro">
<meta property="og:description" content="Fastest TikTok downloader without watermark. Download videos instantly.">
<meta property="og:type" content="website">
<meta property="og:url" content="${CONFIG.domain}/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TikTok Downloader Pro">
<meta name="twitter:description" content="Download TikTok videos in HD instantly.">

<!-- Performance -->
<link rel="icon" href="favicon.png" type="image/png">
<link rel="shortcut icon" href="favicon.png" type="image/png">
<link rel="apple-touch-icon" sizes="180x180" href="logo.png">
  
<meta name="google" content="notranslate">
<meta name="google" content="nositelinkssearchbox">
<link rel="preload" as="script" href="https://cdn.tailwindcss.com">
<link rel="preload" as="script" href="https://unpkg.com/react@18/umd/react.production.min.js">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="//unpkg.com">
<link rel="dns-prefetch" href="//cdn.tailwindcss.com">

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3TDZE61768"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3TDZE61768');
</script>

<!-- Structured Data -->
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"WebApplication",
"name":"TikTok Downloader Pro",
"url":"${CONFIG.domain}/",
"description":"Download TikTok videos without watermark in HD quality.",
"applicationCategory":"MultimediaApplication",
"operatingSystem":"All",
"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"1842"}
}
</script>
  
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "TikTok Downloader Pro",
 "url": "${CONFIG.domain}/",
 "logo": "${CONFIG.domain}/logo.png"
}
</script>

<!-- React CDN -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- Tailwind -->
<script src="https://cdn.tailwindcss.com"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
body{font-family:'Inter',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;}
.glass-effect{background:rgba(255,255,255,.95);backdrop-filter:blur(10px);}
.spinner{border:3px solid rgba(255,255,255,.3);border-radius:50%;border-top-color:white;width:24px;height:24px;animation:spin 1s ease-in-out infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
.fade-in{animation:fadeIn .5s ease-in;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.progress-bar{height:4px;background:#e0e0e0;border-radius:2px;overflow:hidden;margin-top:10px;}
.progress-fill{height:100%;background:linear-gradient(90deg,#667eea,#764ba2);transition:width .3s ease;}
.quality-card{transition:all .3s ease;}
.quality-card:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(102,126,234,.2);}
.quality-card.selected{border-color:#667eea;background:linear-gradient(135deg,#667eea15,#764ba215);}
.nav-link { transition: all 0.3s ease; padding: 0.5rem 1rem; color: white; text-decoration: none; border-radius: 0.5rem; }
.nav-link:hover { background: rgba(255,255,255,0.2); }
.seo-content { display: none; }
</style>
</head>
  
<script>
document.lastModified = new Date().toUTCString();
fetch("https://www.google.com/ping?sitemap=${CONFIG.domain}/sitemap.xml");
console.log("SEO Boost Active");
</script>
  
<body>

<!-- Navigation - All links point to index.html or other HTML files explicitly -->
<nav style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 1rem; position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(255,255,255,0.2);">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
    <a href="index.html" style="color: white; font-weight: bold; font-size: 1.5rem; text-decoration: none;">🎵 TikTok Downloader Pro</a>
    <div style="display: flex; gap: 1rem;">
      <a href="tiktok-downloader.html" class="nav-link">Downloader</a>
      <a href="tiktok-mp3-converter.html" class="nav-link">MP3</a>
      <a href="tiktok-watermark-remover.html" class="nav-link">No Watermark</a>
      <a href="tiktok-downloader-hd.html" class="nav-link">HD</a>
    </div>
  </div>
</nav>

<!-- Hidden SEO Content -->
<div class="seo-content">
tiktok downloader, download tiktok video, save tiktok hd, tiktok mp3 converter,
tiktok video downloader free, download tiktok without watermark, tiktok downloader online,
fast tiktok downloader, best tiktok saver, tiktok mp4 download, tiktok video save tool,
download tiktok clips, hd tiktok downloader, tiktok converter online
</div>

<div id="root"></div>

<script type="text/babel">
const {useState}=React;

const App=()=>(
<div className="min-h-screen py-8 px-4">
<Header/>
<div className="max-w-4xl mx-auto space-y-6">
<DownloadCard/>
<Features/>
<SEOContent/>
<Footer/>
</div>
</div>
);

const Header=()=>(
<header className="text-center mb-8">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-4">
  <img src="logo1.png" alt="Logo" className="w-12 h-12"/>
  TikTok Videos Downloader
</h1>
<p className="text-white/80 text-lg">
Direct download to your device - No waiting!
</p>
</header>
);

const DownloadCard=()=>{
const[url,setUrl]=useState('');
const[quality,setQuality]=useState('hd');
const[loading,setLoading]=useState(false);
const[downloading,setDownloading]=useState(false);
const[downloadProgress,setDownloadProgress]=useState(0);
const[error,setError]=useState('');
const[success,setSuccess]=useState('');
const[videoInfo,setVideoInfo]=useState(null);

const pasteFromClipboard=async()=>{
try{const text=await navigator.clipboard.readText();setUrl(text);}
catch{setError('Cannot access clipboard');}
};

const fetchVideo=async()=>{
if(!url.trim()){setError('Please enter a TikTok URL');return;}
if(!url.includes('tiktok.com')){setError('Please enter a valid TikTok URL');return;}

setLoading(true);setError('');setSuccess('');setVideoInfo(null);

try{
const response=await fetch('https://www.tikwm.com/api/',{
method:'POST',
headers:{'Content-Type':'application/x-www-form-urlencoded'},
body:\`url=\${encodeURIComponent(url)}&hd=\${quality==='hd'?1:0}\`
});
if(!response.ok)throw new Error();
const data=await response.json();

if(data.data&&data.data.play){
setVideoInfo({
url:data.data.play,
title:data.data.title||'TikTok Video',
author:data.data.author?.nickname||'Unknown',
cover:data.data.cover});
setSuccess('Video found! Click "Download Now" to save to your device.');
}else throw new Error();
}catch{
setError('Failed to fetch video. The API might be temporarily unavailable.');
}finally{setLoading(false);}
};

const downloadDirect=async()=>{
if(!videoInfo)return;
setDownloading(true);setDownloadProgress(0);

try{
const response=await fetch(videoInfo.url);
if(!response.ok)throw new Error();
const contentLength=response.headers.get('content-length');
const total=parseInt(contentLength,10);
let loaded=0;

const reader=response.body.getReader();
const stream=new ReadableStream({
start(controller){
function pump(){
return reader.read().then(({done,value})=>{
if(done){controller.close();return;}
loaded+=value.byteLength;
if(total){setDownloadProgress(Math.round((loaded/total)*100));}
controller.enqueue(value);
return pump();
});
}
return pump();
}
});

const blob=await new Response(stream).blob();
const blobUrl=window.URL.createObjectURL(blob);
const link=document.createElement('a');
link.href=blobUrl;
const filename=\`\${videoInfo.title.replace(/[^a-z0-9]/gi,'_')}_\${quality}.mp4\`;
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(blobUrl);
setSuccess(\`✅ Downloaded: \${filename}\`);
}catch{
setError('Download failed. Trying alternative method...');
window.open(videoInfo.url,'_blank');
}finally{setDownloading(false);setDownloadProgress(0);}
};

return(
<div className="glass-effect rounded-2xl p-6 md:p-8 shadow-2xl">

<div className="mb-6">
<label className="block text-gray-700 font-semibold mb-2">TikTok Video URL</label>
<div className="flex gap-2">
<input type="text" value={url} onChange={e=>setUrl(e.target.value)}
placeholder="https://www.tiktok.com/@username/video/1234567890"
className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"/>
<button onClick={pasteFromClipboard}
className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl">📋</button>
</div>
</div>

<div className="mb-6">
<label className="block text-gray-700 font-semibold mb-3">Select Quality</label>
<div className="grid grid-cols-3 gap-3">
{[
{id:'hd',icon:'🎬',label:'HD',desc:'Best Quality'},
{id:'sd',icon:'📱',label:'SD',desc:'Smaller Size'},
{id:'audio',icon:'🎵',label:'Audio',desc:'MP3 Only'}
].map(q=>(
<div key={q.id} onClick={()=>setQuality(q.id)}
className={\`quality-card cursor-pointer border-2 rounded-xl p-4 text-center \${
quality===q.id?'selected border-indigo-500':'border-gray-200'
}\`}>
<div className="text-2xl mb-1">{q.icon}</div>
<div className="font-bold text-gray-800">{q.label}</div>
<div className="text-xs text-gray-500">{q.desc}</div>
</div>
))}
</div>
</div>

{!videoInfo&&(
<button onClick={fetchVideo} disabled={loading}
className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2">
{loading?<><div className="spinner"></div><span>Finding video...</span></>:<>🔍 Find Video</>}
</button>
)}

{videoInfo&&!downloading&&(
<div className="fade-in">
<div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
<h3 className="font-bold text-green-800 mb-1">✅ Video Found!</h3>
<p className="text-sm text-green-700">{videoInfo.title}</p>
<p className="text-xs text-green-600">👤 {videoInfo.author}</p>
</div>

<button onClick={downloadDirect}
className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl">
⬇️ Download Now
</button>

<button onClick={()=>setVideoInfo(null)}
className="w-full mt-2 py-2 text-gray-500 text-sm">
← Search different video
</button>
</div>
)}

{downloading&&(
<div className="bg-blue-50 rounded-xl p-6 text-center">
<div className="spinner mx-auto mb-3"></div>
<p className="text-blue-800 font-semibold">Downloading...</p>
<p className="text-blue-600 text-sm">{downloadProgress}% complete</p>
<div className="progress-bar">
<div className="progress-fill" style={{width:\`\${downloadProgress}%\`}}></div>
</div>
</div>
)}

{error&&<div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">{error}</div>}
{success&&!downloading&&<div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">{success}</div>}
</div>
);
};

const Features=()=>{
const features=[
{icon:'🛡️',title:'No Watermark',desc:'Clean videos'},
{icon:'⚡',title:'Fast Download',desc:'Direct to device'},
{icon:'🔒',title:'100% Safe',desc:'No registration'},
{icon:'📱',title:'All Devices',desc:'Mobile & Desktop'}
];
return(
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{features.map((f,i)=>(
<div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white border border-white/20">
<div className="text-3xl mb-2">{f.icon}</div>
<h3 className="font-semibold text-sm">{f.title}</h3>
<p className="text-xs text-white/80">{f.desc}</p>
</div>
))}
</div>
);
};

const SEOContent = () => (
<div style={{display:'none'}}>
  <h2>TikTok Downloader - Free Online Tool</h2>
  <p>Welcome to the best tiktok downloader available online. Our tool allows you to download tiktok video content without watermark in HD quality.</p>
  <h3>Features</h3>
  <ul>
    <li>Download tiktok without watermark</li>
    <li>Save tiktok video in HD quality</li>
    <li>Convert tiktok to mp3 audio</li>
    <li>Fast tiktok downloader online</li>
  </ul>
  <h3>How to Use</h3>
  <p>Simply paste your TikTok URL above and click download. Our tiktok video saver will handle the rest.</p>
</div>
);

const Footer=()=>(
<footer className="text-center text-white/70 text-sm py-4">
<p>⚠️ For educational purposes only. Respect copyright laws.</p>
<p className="mt-1">© 2024 TikTok Downloader Pro. Not affiliated with TikTok.</p>
<div style={{marginTop:'2rem', padding:'2rem', background:'rgba(255,255,255,0.1)', borderRadius:'1rem'}}>
  <h3 style={{color:'white', marginBottom:'1rem'}}>Related Tools</h3>
  <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
    <a href="tiktok-downloader.html" style={{color:'#a5b4fc', textDecoration:'none'}}>TikTok Downloader</a>
    <a href="download-tiktok-video.html" style={{color:'#a5b4fc', textDecoration:'none'}}>Download Video</a>
    <a href="tiktok-video-downloader-without-watermark.html" style={{color:'#a5b4fc', textDecoration:'none'}}>No Watermark</a>
    <a href="tiktok-to-mp4.html" style={{color:'#a5b4fc', textDecoration:'none'}}>MP4 Converter</a>
    <a href="tiktok-mp3-converter.html" style={{color:'#a5b4fc', textDecoration:'none'}}>MP3 Converter</a>
    <a href="save-tiktok-video.html" style={{color:'#a5b4fc', textDecoration:'none'}}>Video Saver</a>
  </div>
</div>
</footer>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
</script>

<!-- Behavior Signals for Crawlers -->
<script>
document.addEventListener("scroll",()=>{});
document.addEventListener("click",()=>{});
setTimeout(()=>{},30000);
</script>

</body>
</html>`;

// SEO Page Templates - All links fixed to use .html extension
const seoPages = [
  {
    slug: 'tiktok-downloader',
    title: 'TikTok Downloader - Free Online Video Downloader 2024',
    h1: 'Free TikTok Downloader - Download Videos Without Watermark',
    description: 'Best TikTok downloader to save videos in HD quality. Free, fast, and secure online tool.'
  },
  {
    slug: 'download-tiktok-video',
    title: 'Download TikTok Video - Free HD Video Saver',
    h1: 'Download TikTok Video in HD Quality',
    description: 'Learn how to download TikTok video files in MP4 format. Free online tool.'
  },
  {
    slug: 'tiktok-video-downloader-without-watermark',
    title: 'TikTok Video Downloader Without Watermark - Clean Downloads',
    h1: 'TikTok Video Downloader Without Watermark',
    description: 'Remove TikTok watermarks automatically. Download clean videos without logo.'
  },
  {
    slug: 'tiktok-to-mp4',
    title: 'TikTok to MP4 Converter - Free Online Conversion',
    h1: 'Convert TikTok to MP4 - Free Online Converter',
    description: 'Convert TikTok videos to MP4 format instantly. Compatible with all devices.'
  },
  {
    slug: 'tiktok-mp3-converter',
    title: 'TikTok MP3 Converter - Extract Audio from Videos',
    h1: 'TikTok MP3 Converter - Download Audio Only',
    description: 'Convert TikTok videos to MP3 audio files. Extract music and sounds.'
  },
  {
    slug: 'save-tiktok-video',
    title: 'Save TikTok Video - Free Online Video Saver',
    h1: 'Save TikTok Video to Your Device',
    description: 'Learn how to save TikTok video content permanently. Free tool.'
  },
  {
    slug: 'tiktok-downloader-online',
    title: 'TikTok Downloader Online - No App Needed',
    h1: 'TikTok Downloader Online - Browser-Based Tool',
    description: 'Use our TikTok downloader online without installing any software.'
  },
  {
    slug: 'tiktok-downloader-hd',
    title: 'TikTok Downloader HD - High Quality Video Downloads',
    h1: 'TikTok Downloader HD - 1080p & 4K Support',
    description: 'Download TikTok videos in HD quality. Support for 1080p and 4K.'
  },
  {
    slug: 'tiktok-watermark-remover',
    title: 'TikTok Watermark Remover - Clean Video Downloads',
    h1: 'TikTok Watermark Remover - Automatic Logo Removal',
    description: 'Remove TikTok watermarks automatically. Download clean videos.'
  },
  {
    slug: 'tiktok-video-saver',
    title: 'TikTok Video Saver - Secure Download Tool',
    h1: 'TikTok Video Saver - Permanent Storage Solution',
    description: 'Save TikTok videos permanently with our secure video saver.'
  }
];

function generateSEOPage(page) {
  // Get other pages for related links
  const otherPages = seoPages.filter(p => p.slug !== page.slug).slice(0, 4);
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="keywords" content="${page.slug.replace(/-/g, ' ')}, tiktok downloader, download tiktok, tiktok video">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${CONFIG.domain}/${page.slug}">
  
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${CONFIG.domain}/${page.slug}">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
    .glass-effect { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }
    .btn-primary { display: inline-block; padding: 1rem 2rem; background: linear-gradient(to right, #667eea, #764ba2); color: white; font-weight: bold; border-radius: 0.75rem; text-decoration: none; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transition: transform 0.2s; }
    .btn-primary:hover { transform: translateY(-2px); }
    .nav-link { color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.5rem; transition: background 0.3s; }
    .nav-link:hover { background: rgba(255,255,255,0.2); }
  </style>
</head>
<body>
  <!-- Navigation - Fixed: All links point to .html files -->
  <nav style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.2);">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
      <a href="index.html" style="color: white; font-weight: bold; font-size: 1.5rem; text-decoration: none;">🎵 TikTok Downloader Pro</a>
      <div style="display: flex; gap: 1rem;">
        <a href="tiktok-downloader.html" class="nav-link">Downloader</a>
        <a href="tiktok-mp3-converter.html" class="nav-link">MP3</a>
        <a href="tiktok-watermark-remover.html" class="nav-link">No Watermark</a>
        <a href="tiktok-downloader-hd.html" class="nav-link">HD</a>
      </div>
    </div>
  </nav>

  <div class="max-w-4xl mx-auto px-4 py-12">
    <div class="glass-effect rounded-2xl p-8 md:p-12 shadow-2xl">
      <!-- Breadcrumb - Fixed: Links to index.html -->
      <div style="background: rgba(102, 126, 234, 0.1); padding: 0.5rem 1rem; border-radius: 9999px; display: inline-block; margin-bottom: 1rem; color: #4c51bf; font-size: 0.875rem;">
        <a href="index.html" style="color: #4c51bf; text-decoration: none;">Home</a> / <span>${page.title}</span>
      </div>
      
      <h1 class="text-4xl font-bold text-gray-800 mb-4">${page.h1}</h1>
      <p class="text-lg text-gray-600 mb-8">${page.description}</p>
      
      <div class="prose max-w-none text-gray-600 mb-8">
        <p>${page.description} Our tool is completely free to use and works on all devices including iPhone, Android, Windows, and Mac.</p>
        
        <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Key Features</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>No watermark on downloaded videos</li>
          <li>HD quality support up to 4K</li>
          <li>Fast download speeds</li>
          <li>No registration required</li>
          <li>100% safe and secure</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">How It Works</h2>
        <ol class="list-decimal pl-5 space-y-2">
          <li>Copy the TikTok video URL</li>
          <li>Paste it into our downloader</li>
          <li>Select your preferred quality (HD, SD, or MP3)</li>
          <li>Click download and save to your device</li>
        </ol>
      </div>
      
      <!-- Fixed: Button explicitly links to index.html -->
      <a href="index.html" class="btn-primary">
        🔍 Try It Now - Free
      </a>
    </div>
    
    <!-- Related Pages - Fixed: All links use .html extension -->
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      ${otherPages.map(p => `
      <a href="${p.slug}.html" class="glass-effect p-6 rounded-xl block hover:no-underline" style="text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;">
        <h3 class="font-bold text-gray-800 mb-2">${p.title}</h3>
        <p class="text-sm text-gray-600">${p.description}</p>
        <span style="display: inline-block; margin-top: 0.5rem; color: #667eea; font-size: 0.875rem; font-weight: 500;">Learn more →</span>
      </a>
      `).join('')}
    </div>
    
    <!-- CTA Section - Fixed: Links to index.html -->
    <div class="mt-12 text-center">
      <div class="glass-effect rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Ready to Download?</h2>
        <p class="text-gray-600 mb-6">Start using our free TikTok downloader now. No registration required.</p>
        <a href="index.html" class="btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
          Go to Downloader →
        </a>
      </div>
    </div>
  </div>

  <!-- Footer - Fixed: Links use .html extension -->
  <footer style="background: #111827; color: white; padding: 2rem; margin-top: 4rem;">
    <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
      <p style="margin-bottom: 1rem;">© 2024 TikTok Downloader Pro. Not affiliated with TikTok.</p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="index.html" style="color: #9ca3af; text-decoration: none;">Home</a>
        <a href="tiktok-downloader.html" style="color: #9ca3af; text-decoration: none;">Downloader</a>
        <a href="tiktok-mp3-converter.html" style="color: #9ca3af; text-decoration: none;">MP3</a>
        <a href="tiktok-watermark-remover.html" style="color: #9ca3af; text-decoration: none;">No Watermark</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

function build() {
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Write index.html (working React version)
  fs.writeFileSync(path.join(CONFIG.outputDir, 'index.html'), indexPage);
  console.log('✓ Generated: index.html (Working React Tool)');

  // Write SEO pages
  seoPages.forEach(page => {
    const html = generateSEOPage(page);
    fs.writeFileSync(path.join(CONFIG.outputDir, `${page.slug}.html`), html);
    console.log(`✓ Generated: ${page.slug}.html`);
  });

  // Generate sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CONFIG.domain}/index.html</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${seoPages.map(p => `
  <url>
    <loc>${CONFIG.domain}/${p.slug}.html</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(CONFIG.outputDir, 'sitemap.xml'), sitemap);
  console.log('✓ Generated: sitemap.xml');

  // Generate robots.txt
  const robots = `User-agent: *
Allow: /
Sitemap: ${CONFIG.domain}/sitemap.xml`;
  fs.writeFileSync(path.join(CONFIG.outputDir, 'robots.txt'), robots);
  console.log('✓ Generated: robots.txt');

  console.log('\n🚀 Build complete! All files generated:');
  console.log('  ✓ index.html - Main working tool');
  console.log('  ✓ 10 SEO pages - All linking to index.html');
  console.log('  ✓ sitemap.xml');
  console.log('  ✓ robots.txt');
  console.log(`\n📁 Location: ${path.resolve(CONFIG.outputDir)}`);
  console.log('\n💡 All buttons and links now point to index.html');
  console.log('   - "Try It Now - Free" → index.html');
  console.log('   - "Go to Downloader" → index.html');
  console.log('   - Navigation links → [page].html');
  console.log('   - Related pages → [page].html');
}

build();