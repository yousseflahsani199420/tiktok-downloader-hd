@echo off
chcp 65001 >nul
title Force Push to GitHub
color 0A

echo ==========================================
echo    FORCE PUSH TO GITHUB
echo ==========================================
echo.

:: Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: Navigate to project directory
cd /d "C:\Users\youss\Desktop\tiktok last\tiktok-seo-pages\dist"

echo [1/6] Initializing Git repository...
if not exist ".git" (
    git init
) else (
    echo Git already initialized
)

echo.
echo [2/6] Setting remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/yousseflahsani199420/tiktok-downloader-hd.git

echo.
echo [3/6] Adding all files...
git add -A
git add -f *

echo.
echo [4/6] Committing changes...
set datetime=%date% %time%
git commit -m "Force update: %datetime%" -m "Updated with new SEO pages and working downloader" --allow-empty

echo.
echo [5/6] Fetching remote...
git fetch origin

echo.
echo [6/6] FORCE PUSHING to main branch...
echo WARNING: This will overwrite remote repository!
echo.
choice /C YN /M "Are you sure you want to force push"
if errorlevel 2 (
    echo Cancelled by user
    pause
    exit /b 0
)

:: Force push to main branch
git push origin HEAD:main --force

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Trying master branch...
    git push origin HEAD:master --force
)

echo.
echo ==========================================
echo    PUSH COMPLETE!
echo ==========================================
echo.
echo Check your repository:
echo https://github.com/yousseflahsani199420/tiktok-downloader-hd
echo.
pause