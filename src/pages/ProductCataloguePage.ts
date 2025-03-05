import { expect, Page } from "@playwright/test";

export class ProductCataloguePage {
    
    constructor(private page: Page) {
        this.page = page;
    }

    private productCatalogueTab = this.page.locator('//span[text()="Product catalogue"]');
    private allProductsTab = this.page.locator('//span[text()="All products"]');
    private addYourFirstTestProductMsg = this.page.locator('//span[text()="Add your first test product"]');

    async clickOnProductCatalogueTab() {
        await this.productCatalogueTab.click();
    }

    async clickOnAllProductsTab() {
        await this.allProductsTab.click();
    }

    async verifyAddYourFirstTestProductMessageDisplayed() {
        await expect(this.addYourFirstTestProductMsg).toBeVisible();
    }
}