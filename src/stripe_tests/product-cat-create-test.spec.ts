import { test, expect, Browser, chromium, Page, BrowserContext } from '@playwright/test'
import { CreateProduct } from '../pages/product-catlogue-create-page';
import testdata from '../testdata/productCreate.json';

test('Create Product in Product Catlogue Tab', async()=> {
    const browser:Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];

    const environment = 'Prod';
  
    await page.bringToFront();

    const createProduct = new CreateProduct(page);
    await createProduct.clickOnProductCatTab();
    await createProduct.clickOnCreateProTab();
    await createProduct.fillName(testdata.name);
    await createProduct.fillAmount(testdata.amount);
    await createProduct.clickOnAddProduct();

});

test('Create Feature on Product', async() => {
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    const environment = 'Prod';
    await page.bringToFront();

    const createFeature = new CreateProduct(page);
    await createFeature.clickOnFeaturesTab();
    await createFeature.clickOnCreateFeaturesButton();
    await createFeature.fillFeatureNameInput(testdata.featureName);
    await createFeature.clickOnCreateButton();

    await createFeature.selectFeatureName(testdata.featureName);
    await createFeature.clickOnAttachToProductTab();
    await createFeature.clickOnChooseAProduct();
    await createFeature.clickOnSelect();
    await createFeature.clickOnConfirmButton();

});
