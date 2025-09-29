const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '.screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

async function takeScreenshot() {
  const url = process.argv[2] || 'http://localhost:3000';
  const filename = process.argv[3] || 'screenshot.png';
  const outputPath = path.join(screenshotsDir, filename);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });

  // Wait a bit for animations
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();

  console.log(`Screenshot saved to ${outputPath}`);
}

takeScreenshot().catch(console.error);