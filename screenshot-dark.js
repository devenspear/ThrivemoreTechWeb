const puppeteer = require('/opt/homebrew/lib/node_modules/puppeteer');
const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(process.cwd(), '.screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

async function takeScreenshot() {
  const url = process.argv[2] || 'http://localhost:3000';
  const filename = process.argv[3] || 'screenshot-dark.png';
  const outputPath = path.join(screenshotsDir, filename);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Force dark mode by adding the dark class to html element
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });

  // Add dark class to html element
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  });

  // Wait for re-render
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();

  console.log(`Screenshot saved to ${outputPath}`);
}

takeScreenshot().catch(console.error);