import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import loginData from "../test-data/loginData.json";
import productData from "../test-data/productData.json";
import { AddProductPage } from "../pages/add-product-page";

test('Add new product in OpenCart Admin', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addProduct = new AddProductPage(page);

    await page.goto('https://your-opencart-site.com/admin');
    await loginPage.login(loginData.username, loginData.password);

    await addProduct.goToAddProductPage();
    await addProduct.enterGeneralTab(productData.name, productData.metaTitle);
    await addProduct.enterDataTab(productData.model, productData.price);
    await addProduct.saveProduct();

    await expect(page.locator('//div[contains(@class,"alert-success")]')).toBeVisible();
});
