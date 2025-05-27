import { test, expect, chromium, Browser, Page } from 'playwright/test';

test('sample test', async() => {
    const browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await page.waitForTimeout(5000); 




});