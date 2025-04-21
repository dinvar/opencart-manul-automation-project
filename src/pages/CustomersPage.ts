import { expect, Page } from "@playwright/test";

export class CustomersPage {
    
    constructor(private page: Page) {
        this.page = page;
    }
    //Locators
    private customersTab = this.page.locator('//a[@aria-label="Customers"]');
    private addCustomerButton = this.page.locator('//button[@data-testid="listview-add-customer-button"]');
    private customerNameInput = this.page.locator('//input[contains(@id,"billing")]');
    private customerEmailInput = this.page.locator('//input[@data-testid="customer-email-input"]');
    private clickAddCustomer = this.page.locator('//button[contains(@type,"submit")]//span[contains(text(),"Add customer")]');
    private remainingBalanceTab = this.page.locator('//a[@data-collection-id="customers.balances"]');
    private noRemainingBalanceMsg = this.page.locator('//div[@class="⚙ rs-0 as-lu as-lv as-lw ⚙b32ugi"]');
    
    // private menuLocator = (menu: string) => this.page.locator(`//a[contains(text(), '${menu}')]`);

    // async selectMenu(menu: string) {
    //     const menuItem = this.menuLocator(menu);
    //     await menuItem.click();  
    // }

    //Methods
    async clickOnCustomersTab() {
        await this.customersTab.click();
    }
    
    async clickAddCustomerButton() {
        await this.addCustomerButton.click();
    }

    async clickOnNameTab() {
         await this.customerNameInput.click();
            //await this.page.waitForTimeout(1000);
        //     await this.page.waitForSelector('//input[contains(@id,"billing")]');
    //     await this.page.click('//input[contains(@id,"billing")]');
    }

    async fillCustomerNameInput(name: string) {
        await this.customerNameInput.fill(name);
    }

    async fillAccountEmail(email: string) {
        await this.customerEmailInput.fill(email);
    }   
 
        // async fillCustomerNameInput(name: string) {
        //     console.log(`Filling customer name: ${name}`);
        //     await this.customerNameInput.fill(name);
        // }
    
        // async fillAccountEmail(email: string) {
        //     console.log(`Filling customer email: ${email}`);
        //     await this.customerEmailInput.fill(email);
    // }
    


    async clickOnAddCustomerButton() {
        await this.clickAddCustomer.click();
    }

    async clickOnRemainingBalanceTab() {
        await this.remainingBalanceTab.click();
    }

    async verifyNoRemainingBalanceMessageDisplayed() {
        await expect(this.noRemainingBalanceMsg).toBeVisible();
    }

    async verifyRemainingBalanceMessageDisplayed() {
        await expect(this.noRemainingBalanceMsg).not.toBeVisible();
    }

    
}