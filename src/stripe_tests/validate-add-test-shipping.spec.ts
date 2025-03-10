import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { ProductCataloguePage } from '../pages/ProductCataloguePage';
import testData from '../testdata/CreateShipping.json';

test('Validate create shipping test', async() =>{

    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
  
    await page.bringToFront();

    const productCataloguePage : ProductCataloguePage = new ProductCataloguePage(page);
    await productCataloguePage.clickOnProductCatalogueTab();
    await productCataloguePage.clickOnShippingRatesTab();
    await productCataloguePage.clickOnCreateShippingRatesTab();
    await productCataloguePage.fillAmount(testData.amount);
    await productCataloguePage.fillDescription(testData.description);
    await productCataloguePage.fillMinimumEstimatedShippingDays(testData.minimumEstimatedShippingDays);
    await productCataloguePage.fillMaximumEstimatedShippingDays(testData.maximumEstimatedShippingDays);
    await productCataloguePage.clickSaveButton();
});
    