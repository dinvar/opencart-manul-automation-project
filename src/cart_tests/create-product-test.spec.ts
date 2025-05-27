import { test, expect } from "@playwright/test";
import { CreateProductPage } from "../pages/create-product-page";
import fs from "fs";
import { parse } from "csv-parse/sync"; 


function readCSVFileSync(filePath: string): any[] {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });
}

test('Create products from CSV in OpenCart', async ({ page }) => {
    const productPage = new CreateProductPage(page);

    await page.goto('https://your-opencart-site.com/admin');
    await page.fill('//input[@id="input-username"]', 'admin');
    await page.fill('//input[@id="input-password"]', 'admin');
    await page.click('//button[@type="submit"]');

    // Read CSV synchronously before loop
    const products = readCSVFileSync('test-data/products.csv');

    for (const product of products) {
        await productPage.navigateToAddProduct();
        await productPage.createProduct(product.name, product.amount);
        await expect(page.locator('//div[contains(@class,"alert-success")]')).toBeVisible();
    }
});
