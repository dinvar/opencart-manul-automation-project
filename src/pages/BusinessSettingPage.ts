import { expect, Page } from "@playwright/test";
export class BusinessSettingPage {
    
    constructor(public page: Page) {
        this.page = page;
    }

    //   Locators
    private businessSettingHeader = this.page.locator('//h1[@id="secondary-nav-title"]');
    private bankaccountandcurrency = this.page.locator('//span[text()="Bank accounts and currencies"]');
    private toggleminimumbalance = this.page.locator('//label[text()="Keep a minimum amount in your payments balance"]');
    private filladdminimumamount = this.page.locator('//input[@name="minimum_balance"]');
    private savebutton = this.page.locator('//button[text()="Save"]');
    

    async isBussinessSettingsHeaderVisible() : Promise<boolean> {
        return await this.businessSettingHeader.isVisible();
    }

    async verifybusinessSettingHeader() {
        await expect(this.businessSettingHeader).toBeVisible();
    }

    async clickbankaccountandcurrency() {
        await this.bankaccountandcurrency.click();
    }

    async enabletoggleminimumbalance() {
        await this.toggleminimumbalance.isEnabled();
    }


    async fillminimumamount() {
        await this.filladdminimumamount.fill('100');
    }   

    async clicksavebutton() {
        await this.savebutton.click();
    }   
    
}
