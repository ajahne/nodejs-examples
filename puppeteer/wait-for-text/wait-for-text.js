const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://espn.com');
  await page.waitForFunction(
    'document.querySelector("body").innerText.includes("NBA")',
  );
  await page.screenshot({path: 'page.png', fullPage:true});
  await browser.close();
})();
