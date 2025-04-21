import {expect,Page} from '@playwright/test';

export class HomePage{
    constructor(public page:Page){  
        this.page = page;   
    }

    public homeHeader = this.page.locator('//a//span[contains(text(),"Home")]');
    // public createTab = this.page.locator('//a[@data-testid="uab-trigger"]');
    // public paymentButton = this.page.locator('//a[@href="/test/payments/new"]');


    public selectMenuOption = '//a//span[contains(text(),"*menu*")]';

    async clickOnHomeTab() {
        await this.homeHeader.click();
    }
    async selectMenu(menu: string) {
        var xpath = await this.selectMenuOption.replace("*menu*", menu)
        await this.page.locator(xpath).click();
    }

    
    // async clickCreateButton(){
    //     await this.createTab.click();
    // }
    // async clickPaymentButton(){
    //     await this.paymentButton.click();
    // }

};