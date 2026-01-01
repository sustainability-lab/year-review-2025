const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const files = [
    // Main posters
    { input: 'sustainability-lab-2025-review.html', output: 'sustainability-lab-2025.png', selector: '.poster' },
    { input: 'version-2-blue.html', output: 'version-2-blue.png', selector: '.poster' },
    { input: 'version-3-light.html', output: 'version-3-light.png', selector: '.poster' },

    // Carousel - Theme 1 (Gold)
    { input: 'carousel/slide-1-cover.html', output: 'carousel/slide-1-cover.png', selector: '.slide' },
    { input: 'carousel/slide-2-stats.html', output: 'carousel/slide-2-stats.png', selector: '.slide' },
    { input: 'carousel/slide-3-awards.html', output: 'carousel/slide-3-awards.png', selector: '.slide' },
    { input: 'carousel/slide-4-publications.html', output: 'carousel/slide-4-publications.png', selector: '.slide' },
    { input: 'carousel/slide-5-team.html', output: 'carousel/slide-5-team.png', selector: '.slide' },

    // Carousel - Theme 2 (Blue)
    { input: 'carousel-blue/slide-1-cover.html', output: 'carousel-blue/slide-1-cover.png', selector: '.slide' },
    { input: 'carousel-blue/slide-2-stats.html', output: 'carousel-blue/slide-2-stats.png', selector: '.slide' },
    { input: 'carousel-blue/slide-3-awards.html', output: 'carousel-blue/slide-3-awards.png', selector: '.slide' },
    { input: 'carousel-blue/slide-4-publications.html', output: 'carousel-blue/slide-4-publications.png', selector: '.slide' },
    { input: 'carousel-blue/slide-5-team.html', output: 'carousel-blue/slide-5-team.png', selector: '.slide' },

    // Carousel - Theme 3 (Light)
    { input: 'carousel-light/slide-1-cover.html', output: 'carousel-light/slide-1-cover.png', selector: '.slide' },
    { input: 'carousel-light/slide-2-stats.html', output: 'carousel-light/slide-2-stats.png', selector: '.slide' },
    { input: 'carousel-light/slide-3-awards.html', output: 'carousel-light/slide-3-awards.png', selector: '.slide' },
    { input: 'carousel-light/slide-4-publications.html', output: 'carousel-light/slide-4-publications.png', selector: '.slide' },
    { input: 'carousel-light/slide-5-team.html', output: 'carousel-light/slide-5-team.png', selector: '.slide' },
];

(async () => {
    const browser = await puppeteer.launch();

    for (const file of files) {
        console.log(`Capturing: ${file.input}...`);
        const page = await browser.newPage();

        const isCarousel = file.input.includes('carousel');
        const width = isCarousel ? 1080 : 1200;
        const height = isCarousel ? 1080 : 1500;

        await page.setViewport({ width, height, deviceScaleFactor: 2 });

        const filePath = path.join(__dirname, file.input);
        await page.goto(`file://${filePath}`, { waitUntil: 'domcontentloaded', timeout: 10000 });

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

        await new Promise(r => setTimeout(r, 3000));

        const element = await page.$(file.selector);
        await element.screenshot({
            path: path.join(__dirname, file.output),
            type: 'png'
        });

        console.log(`  Saved: ${file.output}`);
        await page.close();
    }

    await browser.close();
    console.log('\nAll done!');
})();
