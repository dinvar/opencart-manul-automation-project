import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { ProductCataloguePage } from '../pages/ProductCataloguePage';

test('Validate add your first test product message', async() =>{

    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
  
    await page.bringToFront();

    const productCataloguePage : ProductCataloguePage = new ProductCataloguePage(page);
    await productCataloguePage.clickOnProductCatalogueTab();
    await productCataloguePage.clickOnAllProductsTab();
    await productCataloguePage.verifyAddYourFirstTestProductMessageDisplayed();
});
    