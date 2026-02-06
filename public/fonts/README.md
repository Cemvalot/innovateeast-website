# Fonts Directory

Place your Nunito Sans font files here.

## Required Font Files

Download Nunito Sans font files from:
- [Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)
- Or use a font converter tool to convert TTF files to WOFF2/WOFF

## Required Files:

- `NunitoSans-Light.woff2` (weight: 300)
- `NunitoSans-Regular.woff2` (weight: 400)
- `NunitoSans-Medium.woff2` (weight: 500)
- `NunitoSans-SemiBold.woff2` (weight: 600)
- `NunitoSans-Bold.woff2` (weight: 700)
- `NunitoSans-ExtraBold.woff2` (weight: 800)
- `NunitoSans-Black.woff2` (weight: 900)

## Fallback Options:

If you don't have the font files, the site will use system fonts as fallback:
- macOS/iOS: -apple-system
- Windows: Segoe UI
- Android: Roboto
- Generic: sans-serif

## How to Download:

1. Go to https://fonts.google.com/specimen/Nunito+Sans
2. Click "Download family"
3. Extract the TTF files
4. Convert to WOFF2 format using a tool like:
   - https://cloudconvert.com/ttf-to-woff2
   - Or use `woff2_compress` command-line tool

## Alternative: Use System Fonts

If you prefer not to use Nunito Sans, you can update `tailwind.config.js` to use system fonts instead.
