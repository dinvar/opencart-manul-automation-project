import {test, expect, Browser, chromium, Page } from '@playwright/test';


test('assertion of header', async() => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/Home');

    
    
    
    const header = page.locator('//h3');
    await expect(header).toContainText('Featured');
    await expect(header).toHaveCount(3);

    //await page.waitForTimeout(30000);

    await expect(page.locator('//img[@alt="naveenopencart"]')).toBeVisible();
});