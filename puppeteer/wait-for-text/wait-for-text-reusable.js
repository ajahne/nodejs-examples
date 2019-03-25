const puppeteer = require('puppeteer');

(async () => {
  const url = 'http://espn.com';
  const text = 'NBA';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  try {
    await page.waitForFunction(
      text => document.querySelector('body').innerText.includes(text),
      {},
      text
    );
  } catch(e) {
    console.log(`The text "${text}" was not found on the page`);
  }

  await page.screenshot({path: 'page.png', fullPage:true});
  await browser.close();
})();
