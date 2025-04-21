import { expect, Page } from "@playwright/test";

export class BalancesPage {
    
    constructor(public page: Page) {
        this.page = page;
    }

//   Locators
    public balancesTab = this.page.locator('//a[@aria-label="Balances"]');
    public balancesHeader = this.page.locator('//h1[text()="Balances"]');
    public balanceSummary = this.page.locator('//div[@id="automatic-summary"]/h3');
    public fundsOnHold = this.page.locator('//div[@class="Box-root Box-hideIfEmpty"]/span');
    public setyourminbal = this.page.locator('//a[@aria-label="Set your minimum balance"]');

    async clickBalancesTab() {
        await this.balancesTab.click();
    }

    async verifyBalancesHeader() {
        await expect(this.balancesHeader).toBeVisible();
    }

    async verifyBalanceSummary() {
        await expect(this.balanceSummary).toBeVisible();
    }

    async verifyFundsOnHold() {
        await expect(this.fundsOnHold).toBeVisible();
    }

    async clickSetyourminimumbalance() {
        await this.setyourminbal.click();
    }
}