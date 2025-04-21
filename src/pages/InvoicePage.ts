import { expect, Page } from "@playwright/test"; // 'expect' is used for assertions and testing code behavior.
// 'Page' allows us to interact with a browser page (navigating, clicking, entering text, etc.).

export class InvoicePage {
    constructor(private page: Page) {
        this.page = page;  // Page instance is assigned to the class property.
    }

    // Locators
    //private invoiceTab = this.page.locator('//a[@data-testid="primary-nav-item-link-invoices"]');
    private createTestInvoiceTab = this.page.locator('//div[@class="PressableCore-base Box-root"]/a');
    private customerInput = this.page.locator('//input[@data-testid="customer-search-input-selector"]');
    private addANewCustomerButton = this.page.locator('//div[@class="Box-root Padding-right--4"]'); // updated locator, simplified
    private customerNameInput = this.page.locator('//input[@id="InvoiceEditor-customerName"]');
    private customerEmailInput = this.page.locator('//input[@data-testid="add-customer-email-selector"]');
    private saveButton = this.page.locator('//button[@data-testid="save-customer-button"]');
    private itemInput = this.page.locator('//input[@data-testid="invoice-editor-product-line-item-name-input"]');
    private qtyInput = this.page.locator('//input[@data-testid="invoice-editor-product-line-item-quantity-input"]');
    private priceInput = this.page.locator('//input[@data-testid="invoice-editor-price-selector-new-price-input"]');  // updated locator, simplified
    private clickOnSave = this.page.locator('//button[@data-testid="save-new-invoice-item-selector"]');    // updated locator, simplified

    
    async clickOntestInvoiceTab() {
        await this.createTestInvoiceTab.click();
    }

    async clickOnCustomerInput() {
        await this.customerInput.click();
    }

    async clickOnAddANewCustomerButton() {
        await this.addANewCustomerButton.click();
    }

    async fillCustomerNameInput(name: string) {
        await this.customerNameInput.fill(name);
    }

    async fillCustomerEmailInput(email: string) {
        await this.customerEmailInput.fill(email);
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }

    async fillItemInput(Item: string) {
        await this.itemInput.fill(Item);
    }

    async fillQtyInput(qty: string) {
        await this.qtyInput.fill(qty);
    }

    async fillPriceInput(price: string) {
        await this.priceInput.fill(price);
        
    }

    async clickSave() {
        await this.clickOnSave.click();
    }
    

}
