import {expect, Page} from '@playwright/test';

export class TransactionPage {
    
    public page!: Page;
    constructor(page: Page) { //page - passed from test
        this.page = page;
    }

    public OneTimeHeader = this.page.locator('//div[@style="color: rgb(99, 91, 255);"]');

    public AmountDetails = this.page.locator('//input[@name="amount"]');
    public DescriptionDetails = this.page.locator('//input[@name="description"]');
    public StatementDiscriptorDetails = this.page.locator('//input[@name="statementDescriptor"]');
    public CardNumberDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="cardnumber"]');
    public ExpiryDateDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="exp-date"]');
    public CVCNumberDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="cvc"]');
    public PostalCodeDetails = this.page.frameLocator('//iframe[@title="Secure card payment input frame"]').locator('//input[@name="postal"]');
    public SubmitPaymentButton = this.page.locator('//span[text()="Submit payment"]/ancestor::button');
    public SecurePaymentIframe = this.page.locator('//iframe[@title="Secure card payment input frame"]');

    async clickOneTime(variableName: string) {
        console.log(variableName);
        await this.OneTimeHeader.click();
    }

    async clickAmount() {
        await this.AmountDetails.click();
    }


    async fillAmount(amount: string) {
        await this.AmountDetails.fill(amount);
    }

    async fillDescription(description : string) {
        await this.DescriptionDetails.fill(description);
    }

    async fillStatementDiscriptor(statementDescriptor : string) {
        await this.StatementDiscriptorDetails.fill(statementDescriptor);
    }

    async fillcardNumber(cardnumber : string) {
         await this.CardNumberDetails.fill(cardnumber);
    }

    async fillExpiryDate(expiryDate : string) {
        await this.ExpiryDateDetails.click();
        await this.ExpiryDateDetails.fill(expiryDate);
    }

    async fillCVCNumber(cvc : string) {
        await this.CVCNumberDetails.click();
        await this.CVCNumberDetails.fill(cvc);
    }

    async fillPostalCode(postalCode : string) {
        await this.PostalCodeDetails.click();
        await this.PostalCodeDetails.fill(postalCode);
    }
    async clickSubmitPayment() {
        await this.SubmitPaymentButton.click();
    }
};
