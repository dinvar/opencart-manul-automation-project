import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

test('Search and check featured products on OpenCart homepage', async ({ page }) => {
  const homePage = new HomePage(page);

  // Step 1: Go to home page
  await homePage.gotoHomePage();

  // Step 2: Check featured products are displayed
  const productCount = await homePage.getFeaturedProductCount();
  expect(productCount).toBeGreaterThan(0);

  const productTitles = await homePage.getFeaturedProductTitles();
  console.log("Featured Products:", productTitles);

  // Step 3: Search for a product
  await homePage.searchProduct("MacBook");

  
  const searchHeader = await page.locator('//div[@id="content"]/h1').textContent();
  expect(searchHeader?.trim()).toContain("Search");
});
