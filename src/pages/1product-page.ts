import { expect, Page } from "@playwright/test";


export class ProductsPage {
    constructor(private page: Page) {
        this.page = page;
    }

    private catalogMenu = this.page.locator('//a[contains(text(),"Catalog")]');
    private productsLink = this.page.locator('//a[contains(text(),"Products")]');
    private addNewButton = this.page.locator('//a[@data-original-title="Add New"]');
    private productNameInput = this.page.locator('#input-name1');
    private metaTitleInput = this.page.locator('#input-meta-title1');
    private dataTab = this.page.locator('//a[text()="Data"]');
    private modelInput = this.page.locator('#input-model');
    private saveButton = this.page.locator('//button[@data-original-title="Save"]');

    async navigateToProducts() {
        await this.catalogMenu.click();
        await this.productsLink.click();
    }

    async clickAddNewProduct() {
        await this.addNewButton.click();
    }

    async fillGeneralTab(productName: string, metaTitle: string) {
        await this.productNameInput.fill(productName);
        await this.metaTitleInput.fill(metaTitle);
    }

    async fillDataTab(model: string) {
        await this.dataTab.click();
        await this.modelInput.fill(model);
    }

    async clickSave() {
        await this.saveButton.click();
    }
}
