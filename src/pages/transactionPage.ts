import {expect, Page} from '@playwright/test';

export class TransactionPage {
    
    constructor(private page: Page) {
        this.page = page;
    }

    private OneTimeHeader = this.page.locator('//div[@style="color: rgb(99, 91, 255);"]');

    private AmountDetails = this.page.locator('//input[@name="amount"]');
    private DescriptionDetails = this.page.locator('//input[@name="description"]');
    private StatementDiscriptorDetails = this.page.locator('//input[@name="statementDescriptor"]');
    private CardNumberDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="cardnumber"]');
    private ExpiryDateDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="exp-date"]');
    private CVCNumberDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="cvc"]');
    private PostalCodeDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="postal"]');
    private SubmitPaymentButton = this.page.locator('//span[text()="Submit payment"]/ancestor::button');
    private SecurePaymentIframe = this.page.locator('//iframe[@title="Secure card payment input frame"]');

    async clickOneTime() {
        await this.OneTimeHeader.click();
    }

    async clickAmount() {
        await this.AmountDetails.click();
    }


    async fillAmount() {
         await this.AmountDetails.fill('$100.00');
    }

    async fillDescription() {
        await this.DescriptionDetails.fill('Electricity bill');
    }

    async fillStatementDiscriptor() {
        await this.StatementDiscriptorDetails.fill('MSCBbill');
    }

    async fillcardNumber() {
         await this.CardNumberDetails.fill('4242424242424242');
    }

    async fillExpiryDate() {
        await this.ExpiryDateDetails.click();
        await this.ExpiryDateDetails.fill('12/26');
    }

    async fillCVCNumber() {
        await this.CVCNumberDetails.click();
        await this.CVCNumberDetails.fill('123');
    }

    async fillPostalCode() {
        await this.PostalCodeDetails.click();
        await this.PostalCodeDetails.fill('12345');
    }
    async clickSubmitPayment() {
        await this.SubmitPaymentButton.click();
    }
};
