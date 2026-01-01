const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 1500, deviceScaleFactor: 2 });

    const filePath = path.join(__dirname, 'sustainability-lab-2025-review.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'domcontentloaded', timeout: 10000 });

    // Wait for images to load
    await page.evaluate(async () => {
        const images = document.querySelectorAll('img');
        await Promise.all([...images].map(img => {
            if (img.complete) return;
            return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));
    });

    // Wait for external images and fonts
    await new Promise(r => setTimeout(r, 5000));

    const poster = await page.$('.poster');
    await poster.screenshot({
        path: path.join(__dirname, 'sustainability-lab-2025.png'),
        type: 'png'
    });

    console.log('Saved: sustainability-lab-2025.png');
    await browser.close();
})();
