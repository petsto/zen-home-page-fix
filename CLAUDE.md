# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Firefox/Zen Browser extension (Manifest V2) that replaces blank new tabs with a customizable homepage. No build system — source files are loaded directly by the browser.

## Development

Load in Firefox for testing:
1. Navigate to `about:debugging`
2. Click "Load Temporary Add-on"
3. Select `manifest.json`

Package manually:
```bash
zip -r zen-homepage-fixer.xpi manifest.json home/ icons/ src/
```

Releases are published via GitHub Actions when a `v*` tag is pushed. The CI signs the extension via AMO using `AMO_JWT_ISSUER` and `AMO_JWT_SECRET` secrets.

## Architecture

```
manifest.json           # Extension manifest (MV2), defines permissions and entry points
src/
  background.js         # Service worker: monitors tab lifecycle, opens homepage when last tab closes
  popup.html/js         # Toolbar popup: lets user configure a custom homepage URL
home/
  index.html            # The homepage itself (overrides newtab via chrome_url_overrides)
  index.js              # Wallpaper management, settings modal logic
  search.js             # Search engine selection and query handling
  shortcuts.js          # Shortcut grid: add/edit/delete website shortcuts
  greetings.js          # Locale-aware greeting strings
  styles.css            # All homepage styles
icons/                  # Extension icons (SVGs + PNGs)
```

### Key patterns

- All browser APIs use the `browser.*` namespace (WebExtension standard, not `chrome.*`)
- `browser.storage.local` is the sole persistence layer; keys: `defaultHomepage`, `wallpaperImage`, `wallpaperOpacity`, `wallpaperBlur`, `wallpaperGrain`, `isBingImage`, `bingImageDate`, `selectedBackgroundTab`, `backgroundSectionOpen`
- `background.js` listens to `tabs.onRemoved` and `tabs.onUpdated` to detect when only pinned tabs remain, then opens the configured homepage
- The homepage URL is determined by `fixRedirectUrl()` in `background.js` — `about:*` URLs are redirected to `home/index.html`, bare URLs get `https://` prepended
- Wallpaper images are stored as base64 data URIs in local storage; Bing images are fetched via `https://www.bing.com/HPImageArchive.aspx` and converted to base64 on save
- Grain effect is applied via a dynamically injected `<style>` targeting `.wallpaper-background::after`
- Scripts in `home/` are loaded in order: `search.js` → `greetings.js` → `shortcuts.js` → `index.js`; `getGreeting()` from `greetings.js` is called globally in `index.js`
