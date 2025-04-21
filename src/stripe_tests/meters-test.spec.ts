import { test, expect, Browser, chromium, Page } from '@playwright/test'

test('creating a new meters', async() => {
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    const environment = 'Prod';
    await page.bringToFront();

    await page.locator('//a[@data-testid="primary-nav-item-link-meters"]').click();
    await page.locator('//button[@data-testid="new-meter-btn"]').click();
    await page.locator('//input[@data-testid="meter-builder-name"]').fill('aabbccdd');
    await page.locator('//a[@data-testid="meter-builder-submit-btn"]').click();

});