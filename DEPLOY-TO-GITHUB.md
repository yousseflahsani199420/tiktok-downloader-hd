# Push this website to your existing GitHub repository

Repository: https://github.com/yousseflahsani199420/tiktok-downloader-hd
Default branch: main

## Recommended method (Git)

1. Download and extract this ZIP. The website files are at the ZIP root.
2. Open a terminal/PowerShell in the folder where you want the repository.
3. Clone your existing repository:

   ```powershell
   git clone https://github.com/yousseflahsani199420/tiktok-downloader-hd.git
   ```

4. Copy **all files from the extracted ZIP root** into the newly cloned `tiktok-downloader-hd` folder, allowing files to be replaced. Do not copy the parent folder itself.
5. In the cloned repository folder, remove the obsolete pages if they still exist:

   ```powershell
   Remove-Item .\snapchat.html, .\twitter.html, .\youtube.html -ErrorAction SilentlyContinue
   ```

6. Review and push the update:

   ```powershell
   git status
   git add -A
   git commit -m "Update site with six mobile-friendly SEO pages"
   git push origin main
   ```

Use the normal `git push`; do not use `git push --force`.

## Important

- Keep `CNAME` in the repository root so the custom domain remains configured.
- Keep `index.html` in the repository root.
- The old YouTube, Twitter and Snapchat pages are intentionally not included.
- This updates GitHub files. The live site will update only if GitHub Pages (or your hosting workflow) is configured to deploy from `main` and the repository root.
- Before pushing, check `git status` and make sure any personal or unrelated files are not included.
