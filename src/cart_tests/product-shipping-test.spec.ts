import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { ProductShippingPage } from "../pages/product-shipping-page";
import loginData from "../test-data/loginData.json";
import shippingData from "../test-data/shippingData.json";

test('Update Flat Rate Shipping Settings in OpenCart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shippingPage = new ProductShippingPage(page);

    await page.goto('https://your-opencart-site.com/admin');
    await loginPage.login(loginData.username, loginData.password);

    await shippingPage.navigateToFlatRateShipping();
    await shippingPage.updateShippingDetails(
        shippingData.cost,
        shippingData.taxClass,
        shippingData.geoZone,
        shippingData.status,
        shippingData.sortOrder
    );

    await shippingPage.saveShippingDetails();
    await shippingPage.verifySuccessMessage();
});
