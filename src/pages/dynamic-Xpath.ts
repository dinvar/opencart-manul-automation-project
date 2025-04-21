import { expect, Page } from '@playwright/test';

export class SelectCustoName{
    constructor(private page:Page) {
        this.page=page
    }

    private customersTag = this.page.locator('//a[@data-testid="primary-nav-item-link-customers"]');

    private nameList = '//div[contains(text(),"*Name*")]';

    async selectCusto(name: string) {
        var xpath = await this.nameList.replace("*Name*", name)
        await this.page.locator(xpath).click();
    }

    async clickOnCustomers() {
        await this.customersTag.click();

    }






}