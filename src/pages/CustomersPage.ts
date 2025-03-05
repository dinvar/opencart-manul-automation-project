import { expect, Page } from "@playwright/test";

export class CustomersPage {
    
    constructor(private page: Page) {
        this.page = page;
    }

    private customersTab = this.page.locator('//a[@aria-label="Customers"]');
    private remainingBalanceTab = this.page.locator('//a[@data-collection-id="customers.balances"]');
    private noRemainingBalanceMsg = this.page.locator('//span[text()="No remaining customer cash balances"]');

    async clickOnCustomersTab() {
        await this.customersTab.click();
    }

    async clickOnRemainingBalanceTab() {
        await this.remainingBalanceTab.click();
    }

    async verifyNoRemainingBalanceMessageDisplayed() {
        await expect(this.noRemainingBalanceMsg).toBeVisible();
    }
}