import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";    
import loginData from "../test-data/loginData.json";

test('Admin login test - OpenCart', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://demo.opencart.com');
    await loginPage.login(loginData.username, loginData.password);
    await expect(page.locator('//h1[contains(text(),"Dashboard")]')).toBeVisible();
});
