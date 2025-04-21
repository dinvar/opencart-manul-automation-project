import { expect, Page } from '@playwright/test';

export class RegisterInterest {
    constructor(private page: Page) {
        this.page=page;
    }

    private connectTab = this.page.locator('//a[@data-testid="toggle-workload-connect"]');
    private capitalButton = this.page.locator('//li[@data-testid="workloads-nav-item-loansAndFinancing"]/a/span');
    private registerInterestButton = this.page.locator('//a[@href="https://stripe.com/contact/baas"]');
    private firstNameInput = this.page.locator('//input[@name="firstName"]');
    private lastNameInput = this.page.locator('//input[@name="lastName"]');
    private workEmailInput = this.page.locator('//div[@class="WorkEmailInput"]');
    private companyWebsiteInput = this.page.locator('//input[@name="website"]');
    private selectAFcountry = this.page.locator('//select[@name="Country__c"]');
    private selectCustomersDropdown = this.page.locator('//select[@name="baascustomertype"]');
    
    private selectCustomerLocation = this.page.locator('//select[@name="locationofcustomers"]');
    private selectCrypto = this.page.locator('//select[@name="issuingortreasuryusedforcrypto"]');
    private selectBusinessExpCard = this.page.locator('//select[@name="cardsorfinancialaccountsforemployeespend"]');
    private selectEstimatedValue = this.page.locator('//select[@name="monthlycardorfinancespend"]');
    private selectFunding = this.page.locator('//select[@name="startupfundingtodate"]');
    private submitButton = this.page.locator('//button[@class="FormSubmitButton"]');

    async clickOnConnectTab() {
        await this.connectTab.click();
    }

    async clickOnCaptialTab() {
        await this.capitalButton.click();
    }

    async clickOnRegisterInterestButton() {
        await this.registerInterestButton.click()
    }

    async fillFirstName(Firstname: string) {
        await this.firstNameInput.fill(Firstname)
    }

    async fillLastName(Lastname: string) {
        await this.lastNameInput.fill(Lastname)
    }

    async fillWorkEmail(WorkEmail: string) {
        await this.workEmailInput.fill(WorkEmail)
    }

    async fillCompanyWebsite(Website: string) {
        await this.companyWebsiteInput.fill(Website);
    }

    async clickAndSelectCountry(value: string) {
        await this.selectAFcountry.selectOption(value);
    }

    async clickOnCustomersDropDown(value: string) {
        await this.selectCustomersDropdown.selectOption(value);
    }

    async clickOnCustomerLocationTab(value: string) {
        await this.selectCustomerLocation.selectOption(value);
    }

    async clickOnCryptoDropDown(value: string) {
        await this.selectCrypto.selectOption(value);
    }

    async clickBusinessExpCard(value: string) {
        await this.selectBusinessExpCard.selectOption(value);
    }

    async clickOnEstimatedVolume(value: string) {
        await this.selectEstimatedValue.selectOption(value)
    }

    async clickFunding(value: string) {
        await this.selectFunding.selectOption(value)
    }

    async clickOnSubmitButton() {
        await this.submitButton.click()
    }
}