import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { BalancesPage } from '../pages/BalancesPage';
import { afterEach } from 'node:test';

test('Balances', async() =>{
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    
    await page.bringToFront();
    //await page.waitForTimeout(50000);

    const balancePage : BalancesPage = new BalancesPage(page);
    balancePage.clickBalancesTab();
    balancePage.verifyBalancesHeader();
    balancePage.verifyBalanceSummary();
    await page.screenshot({path: 'new.png', fullPage: true});
    await new Promise(() => {});

});


test('Balances Focus on hold', async() =>{
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
  
    await page.bringToFront();
    await page.waitForTimeout(50000);
    await expect(page.locator('//a[@href="/test/dashboard"]')).toBeVisible();

    await page.click('//a[@aria-label="Balances"]');
    await expect(page.locator('//h1[text()="Balances"]')).toBeVisible();
    await expect(page.locator('//span[text()="Funds on hold"]')).toBeVisible();
    

    await new Promise(() => {});
});


