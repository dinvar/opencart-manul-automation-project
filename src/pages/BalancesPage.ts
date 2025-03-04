import { expect, Page } from "@playwright/test";

export class BalancesPage {
    
    constructor(private page: Page) {
        this.page = page;
    }

    private balancesTab = this.page.locator('//a[@aria-label="Balances"]');
    private balancesHeader = this.page.locator('//h1[text()="Balances"]');
    private balanceSummary = this.page.locator('//span[text()="Balance summary"]');
    private fundsOnHold = this.page.locator('//span[text()="Funds on hold"]');
    private setyourminbal = this.page.locator('//a[@aria-label="Set your minimum balance"]');

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