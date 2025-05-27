import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pages/1product-page";

test('✅ Add New Product (OpenCart Admin)', async ({ page }) => {
  // Step 1: Login to OpenCart Admin
  await page.goto('https://your-opencart-url/admin');
  await page.fill('//input[@id="input-username"]', 'admin');     // update username
  await page.fill('//input[@id="input-password"]', 'admin');     // update password
  await page.click('//button[@type="submit"]');

  // Optional: Handle dashboard popups (if present)
  const closePopup = page.locator('//button[@class="close"]');
  if (await closePopup.isVisible()) {
    await closePopup.click();
  }

  // Step 2: Use ProductsPage to add a new product
  const productsPage = new ProductsPage(page);
  await productsPage.navigateToProducts();
  await productsPage.clickAddNewProduct();
  await productsPage.fillGeneralTab('Smartphone', 'Smartphone Meta');
  await productsPage.fillDataTab('SP-001');
  await productsPage.clickSave();

  // Step 3: Assert success message
  const successAlert = page.locator('//div[contains(@class, "alert-success")]');
  await expect(successAlert).toContainText('Success: You have modified products!');
});
