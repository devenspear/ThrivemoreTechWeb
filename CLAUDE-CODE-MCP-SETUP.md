# Claude Code MCP Playwright Setup

This document explains how to configure MCP Playwright for Claude Code so that AI assistants can visually preview localhost development servers and make more accurate design changes.

## What This Enables

With MCP Playwright configured, Claude Code can:
- 🖥️ **View live localhost pages** visually (not just HTML source)
- 📸 **Take screenshots** of your development work
- 🎯 **Make precise styling changes** based on actual visual appearance
- ✅ **Verify changes** align with your design requests
- 🔄 **Iterate faster** without guessing what needs to be fixed

## Prerequisites

- macOS with Homebrew
- Claude Code installed
- MCP Playwright server (should be installed via Homebrew)

## Installation & Configuration

### 1. Verify MCP Playwright Installation

```bash
# Check if MCP Playwright is installed
mcp-server-playwright --version

# If not installed, install via Homebrew:
brew install mcp-server-playwright
```

### 2. Configure Claude Code

The MCP configuration has been added to your Claude Code config:

**File:** `~/.config/claude-code/config.json`

```json
{
  "auto_approve_tools": ["Bash","Edit","Write","MultiEdit","Read","Glob","Grep","WebFetch","TodoWrite","NotebookEdit"],
  "mcpServers": {
    "playwright": {
      "command": "mcp-server-playwright",
      "args": ["--headless", "--browser", "chrome"],
      "env": {}
    }
  }
}
```

### 3. Restart Claude Code

After modifying the config, restart Claude Code in Warp to load the MCP Playwright server.

## How It Works

Once configured, Claude Code will have access to MCP Playwright tools like:

- `mcp__playwright_navigate` - Navigate to localhost URLs
- `mcp__playwright_screenshot` - Take screenshots of pages
- `mcp__playwright_click` - Interact with page elements
- `mcp__playwright_type` - Type in form fields
- `mcp__playwright_wait` - Wait for elements to load

## Usage Examples

### Viewing Your Development Work

When you ask Claude to preview your localhost development:

```
"Can you see how design-a looks at http://localhost:3003/design-a?"
```

Claude can now:
1. Navigate to the URL
2. Take a screenshot
3. Analyze the visual layout
4. Make informed suggestions

### Making Design Changes

When you request styling changes:

```
"Make the hero text blue and center it"
```

Claude can:
1. View the current page
2. Identify the exact elements
3. Make precise changes
4. Verify the results visually

## Benefits for Development Workflow

### Before MCP Playwright
- ❌ Claude guesses what needs changing
- ❌ Multiple revision cycles
- ❌ Miscommunication about visual elements
- ❌ Time-consuming back-and-forth

### After MCP Playwright
- ✅ Claude sees exactly what you see
- ✅ Precise, targeted changes
- ✅ Faster iteration cycles
- ✅ Visual confirmation of changes

## Troubleshooting

### MCP Tools Not Available

If Claude Code doesn't show MCP tools, check:

1. **Config file syntax** - Ensure JSON is valid
2. **Restart Claude Code** - MCP servers load at startup
3. **Check logs** - Look for MCP connection errors
4. **Test manually** - Run `mcp-server-playwright --help`

### Browser Issues

If screenshots fail:

1. **Check browser** - Chrome should be installed
2. **Update args** - Try `--no-sandbox` for Linux environments
3. **Try different browser** - Use `--browser firefox` or `--browser webkit`

## Advanced Configuration

### Custom Browser Settings

```json
{
  "mcpServers": {
    "playwright": {
      "command": "mcp-server-playwright",
      "args": [
        "--browser", "chrome",
        "--viewport-size", "1280,720",
        "--user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "--headless"
      ],
      "env": {}
    }
  }
}
```

### Multiple MCP Servers

You can add other MCP servers alongside Playwright:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "mcp-server-playwright",
      "args": ["--headless", "--browser", "chrome"],
      "env": {}
    },
    "filesystem": {
      "command": "mcp-server-filesystem",
      "args": ["/path/to/allowed/directory"],
      "env": {}
    }
  }
}
```

## Default Setup for All Projects

This configuration is now set as the default for all Claude Code sessions. When you start a new development project:

1. **Start your dev server** (e.g., `npm run dev`)
2. **Ask Claude to preview** your localhost URL
3. **Make styling requests** with confidence that Claude can see the results
4. **Iterate quickly** with visual feedback

## Success! 🎉

Your Claude Code setup now includes visual browser capabilities. Every development session will have access to see your localhost previews, making design collaboration much more effective.

---

*This setup was configured on $(date) for enhanced Claude Code development workflows.*