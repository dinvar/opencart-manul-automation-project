import { test, expect, Browser, Page } from "@playwright/test";
import { ProductsPage } from "../pages/1product-page"; 
import { chromium } from 'playwright';

test('✅ Add New Product Using CDP (OpenCart Admin)', async () => {
    
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page: Page = context.pages()[0];

    await page.bringToFront(); // Activate that tab

    const productsPage = new ProductsPage(page);

    // ✅ Navigate to "Products" section
    await productsPage.navigateToProducts();

    // ✅ Add new product
    await productsPage.clickAddNewProduct();
    await productsPage.fillGeneralTab("Smartphone", "Smartphone Meta");
    await productsPage.fillDataTab("SP-001");
    await productsPage.clickSave();

    await browser.close();
});



