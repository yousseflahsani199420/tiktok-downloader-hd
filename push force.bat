@echo off
chcp 65001 >nul
title Delete Old & Push New to GitHub
color 0A

echo ==========================================
echo    DELETE OLD CONTENT & PUSH NEW
echo ==========================================
echo.

:: Configuration
set REPO_URL=https://github.com/yousseflahsani199420/tiktok-downloader-hd.git
set PROJECT_DIR=C:\Users\youss\Desktop\tiktok last\tiktok-seo-pages\dist

:: Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo Download from: https://git-scm.com/
    pause
    exit /b 1
)

:: Navigate to project directory
cd /d "%PROJECT_DIR%"
echo [INFO] Working in: %CD%
echo.

:: Step 1: Completely remove old .git folder
echo [1/8] Deleting old Git history...
if exist ".git" (
    rmdir /s /q ".git"
    echo      ✓ Old .git folder deleted
) else (
    echo      ℹ No existing .git folder found
)

:: Step 2: Remove any existing remote references
echo.
echo [2/8] Cleaning remote references...
git remote remove origin 2>nul
echo      ✓ Remotes cleaned

:: Step 3: Initialize fresh repository
echo.
echo [3/8] Initializing NEW Git repository...
git init
echo      ✓ New repository initialized

:: Step 4: Add remote
echo.
echo [4/8] Adding remote repository...
git remote add origin %REPO_URL%
echo      ✓ Remote added: %REPO_URL%

:: Step 5: Configure git user (required for commit)
echo.
echo [5/8] Configuring Git user...
git config user.email "tiktok@downloader.com" 2>nul
git config user.name "TikTok Downloader" 2>nul
echo      ✓ Git user configured

:: Step 6: Add all files
echo.
echo [6/8] Adding ALL files to staging...
git add -A
git add -f * 2>nul
echo      ✓ All files added

:: Step 7: Create initial commit
echo.
echo [7/8] Creating commit...
git commit -m "🚀 Complete rebuild: New SEO pages + working downloader" -m "Generated on: %date% %time%" --allow-empty
echo      ✓ Commit created

:: Step 8: FORCE PUSH (this deletes old remote content!)
echo.
echo ==========================================
echo    ⚠️  WARNING: FORCE PUSH
echo ==========================================
echo This will DELETE all old files on GitHub
echo and replace them with your new files!
echo.
choice /C YN /M "Are you sure you want to proceed"
if errorlevel 2 (
    echo.
    echo [CANCELLED] Operation aborted by user
    pause
    exit /b 0
)

echo.
echo [8/8] FORCE PUSHING to GitHub...
echo      Trying 'main' branch...

git push -f origin main

if errorlevel 1 (
    echo      'main' failed, trying 'master'...
    git push -f origin master
    
    if errorlevel 1 (
        echo.
        echo [ERROR] Push failed! Trying alternative method...
        echo.
        echo Attempting to create orphan branch...
        git checkout --orphan new_branch
        git add -A
        git commit -m "Fresh start"
        git branch -D main 2>nul
        git branch -D master 2>nul
        git branch -m main
        git push -f origin main
    ) else (
        echo      ✓ Successfully pushed to 'master'
    )
) else (
    echo      ✓ Successfully pushed to 'main'
)

echo.
echo ==========================================
echo    ✅ PUSH COMPLETE!
echo ==========================================
echo.
echo Repository URL:
echo %REPO_URL%
echo.
echo Your new files are now live!
echo.
pause