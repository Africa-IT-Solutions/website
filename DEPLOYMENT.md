# Netlify Deployment Guide

## Deployment Steps

1. **Connect Repository to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select the repository: `Africa-IT-Solutions/website`

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - These are already configured in `netlify.toml`

3. **Environment Variables**
   - No environment variables required for this project

4. **Deploy**
   - Netlify will automatically deploy on every push to the `main` branch
   - Or click "Deploy site" to deploy immediately

## Configuration Files

- `netlify.toml` - Netlify configuration with redirects and headers
- `public/_redirects` - SPA routing support
- `vite.config.ts` - Vite build configuration

## Fixes Applied

- ✅ Fixed MIME type issues for JavaScript modules
- ✅ Added proper Content-Type headers
- ✅ Fixed favicon 404 error
- ✅ Optimized parallax effect with `requestAnimationFrame` and `translate3d`
- ✅ Added SPA routing redirects

## Build Verification

Run `npm run build` locally to verify the build works before deploying.

