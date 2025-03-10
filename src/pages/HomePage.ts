import {expect,Page} from '@playwright/test';

export class HomePage{
    constructor(private page:Page){  
        this.page = page;   
    }

    private homeHeader = this.page.locator('//span[text()="Home"]');
    private createTab = this.page.locator('//a[@data-testid="uab-trigger"]');
    private paymentButton = this.page.locator('//a[@href="/test/payments/new"]');

    async clickCreateButton(){
        await this.createTab.click();
    }
    async clickPaymentButton(){
        await this.paymentButton.click();
    }

};