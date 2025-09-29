# Claude Code Screenshot Setup

## Quick Start
Puppeteer is already installed and configured. Screenshots are automatically saved to `.screenshots/` directory (git-ignored).

## Usage in Claude Code Sessions

When Claude needs to see localhost, it will run:
```bash
node screenshot.js <url> <filename>
```

Example:
```bash
node screenshot.js http://localhost:3000/design-a design-a.png
```

## Cleanup

Screenshots are stored in `.screenshots/` directory and should be cleaned up periodically:

```bash
npm run cleanup-screenshots
```

Or manually:
```bash
rm -rf .screenshots
```

## Details

- **Storage**: `.screenshots/` directory (excluded from git)
- **Script**: `screenshot.js` (committed to repo)
- **File sizes**: ~4MB per full-page screenshot
- **Recommendation**: Clean up weekly or after design sessions

## How It Works

1. Puppeteer launches headless Chrome
2. Navigates to specified URL
3. Takes full-page screenshot
4. Saves to `.screenshots/` directory
5. Claude reads the image and can see your localhost

No manual screenshots needed - Claude does it all automatically!