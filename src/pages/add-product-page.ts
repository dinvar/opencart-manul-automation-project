import { Page } from "@playwright/test";

export class AddProductPage {
    constructor(private page: Page) {
        this.page = page;
    }

    // Locators
    private catalogMenu = this.page.locator('//a[contains(text(),"Catalog")]');
    private productsMenu = this.page.locator('//a[contains(text(),"Products")]');
    private addNewButton = this.page.locator('//a[@data-original-title="Add New"]');

    // General tab
    private productNameInput = this.page.locator('//input[@id="input-name1"]');
    private metaTitleInput = this.page.locator('//input[@id="input-meta-title1"]');

    // Data tab
    private dataTab = this.page.locator('//a[text()="Data"]');
    private modelInput = this.page.locator('//input[@id="input-model"]');
    private priceInput = this.page.locator('//input[@id="input-price"]');

    // Save button
    private saveButton = this.page.locator('//button[@data-original-title="Save"]');

    // Methods
    async goToAddProductPage() {
        await this.catalogMenu.click();
        await this.productsMenu.click();
        await this.addNewButton.click();
    }

    async enterGeneralTab(name: string, metaTitle: string) {
        await this.productNameInput.fill(name);
        await this.metaTitleInput.fill(metaTitle);
    }

    async enterDataTab(model: string, price: string) {
        await this.dataTab.click();
        await this.modelInput.fill(model);
        await this.priceInput.fill(price);
    }

    async saveProduct() {
        await this.saveButton.click();
    }
}
