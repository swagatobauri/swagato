const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  // Go to Home
  await page.goto('http://localhost:3000/');
  
  // Wait for React to hydrate
  await new Promise(r => setTimeout(r, 2000));
  
  // Setup error listener
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.toString());
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE ERROR:', msg.text());
    }
  });

  // Click About link
  console.log("Clicking About link...");
  await page.click('a[href="/about"]');
  
  // Wait a bit
  await new Promise(r => setTimeout(r, 2000));
  
  const url = page.url();
  console.log("Current URL after click:", url);
  
  await browser.close();
})();
