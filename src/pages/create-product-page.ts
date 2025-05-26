import { Page } from "@playwright/test";

export class CreateProductPage {
    constructor(private page: Page) {}

    private catalogMenu = this.page.locator('//a[contains(text(),"Catalog")]');
    private productsMenu = this.page.locator('//a[text()="Products"]');
    private addNewButton = this.page.locator('//a[@data-original-title="Add New"]');

    private productName = this.page.locator('//input[@id="input-name1"]');
    private metaTitle = this.page.locator('//input[@id="input-meta-title1"]');
    private dataTab = this.page.locator('//a[text()="Data"]');
    private priceField = this.page.locator('//input[@id="input-price"]');
    private saveButton = this.page.locator('//button[@data-original-title="Save"]');

    async navigateToAddProduct() {
        await this.catalogMenu.click();
        await this.productsMenu.click();
        await this.addNewButton.click();
    }

    async createProduct(name: string, price: string) {
        await this.productName.fill(name);
        await this.metaTitle.fill(name + ' Meta');
        await this.dataTab.click();
        await this.priceField.fill(price);
        await this.saveButton.click();
    }
}
