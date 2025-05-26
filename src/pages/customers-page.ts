import { Page, expect } from "@playwright/test";

export class CustomersPage {
    constructor(private page: Page) {}

    public customersMenu = this.page.locator('//a[contains(text(),"Customers")]');
    public customersOption = this.page.locator('//a[text()="Customers"]');
    public customersHeader = this.page.locator('//h1[contains(text(),"Customers")]');

    async goToCustomers() {
        await this.customersMenu.click();
        await this.customersOption.click();
    }

    async verifyCustomersPage() {
        await expect(this.customersHeader).toBeVisible();
    }
}
