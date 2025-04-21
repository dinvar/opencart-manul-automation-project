import {expect, Page} from "@playwright/test";

export class InvoicesPage {

    constructor(private page: Page) {
        this.page = page;
    }
    
    private createTestInvoice = this.page.locator('//div[@class="Box-root Padding-right--8"]');
    private customerName = this.page.locator('//input[@data-testid="customer-search-input-selector"]');
    private selectCustomer = this.page.locator('//span[text()="Amar Singh"]');
    private AddItems = this.page.locator('//input[@data-testid="add-item-input-selector"]');
    private setQuantity = this.page.locator('//input[@data-testid="invoice-editor-product-line-item-quantity-input"]');
    private setPrice = this.page.locator('//input[@data-testid="dashboard-decimal-currency-input-selector"]');
    private saveInvoiceButton = this.page.locator('//button[@data-testid="save-new-invoice-item-selector"]');

    private selectCusto = '//span[text()="*EMAIL_ID*"]/parent::div';

    async clickOnTestInvoiceButton() {
        await this.createTestInvoice.click();
    }

    async clickCustomerName() {
        await this.customerName.click();
    }
    
    async selectCustomerName(_customerName: string) {
        await this.selectCustomer.click();
    }

    async selectCustoEmail(customerEmail: string) {
        var xpath = await this.selectCusto.replace("*EMAIL_ID*", customerEmail);
        await this.page.locator(xpath).click();
    }

    async fillAddItems(items: string) {
        await this.AddItems.fill(items);
    }

    async fillSetQuantity(quantity: string) {
        await this.setQuantity.fill(quantity);
    }
    async fillSetPrice(price: string) {
        await this.setPrice.fill(price);
    }
    async clickSaveInvoiceButton() {
        await this.saveInvoiceButton.click();
    }

    
}
