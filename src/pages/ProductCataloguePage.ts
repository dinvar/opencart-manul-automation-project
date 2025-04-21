import { expect, Page } from "@playwright/test";

export class ProductCataloguePage {
    
    constructor(private page: Page) {
        this.page = page;
    }

    private productCatalogueTab = this.page.locator('//a[@data-testid="primary-nav-item-link-products"]');
    private shippingRatesTab = this.page.locator('//a[@data-collection-id="products.shippingRates"]');
    private createShippingRatesTab = this.page.locator('//button[@data-db-analytics-name="list_views.header.new"]');
    private setAmount = this.page.locator('//input[@name="ShippingRateCurrencyOptions-base"]');
    private descriptionDetails = this.page.locator('//input[@id="rateDisplayName"]');
    private minimumEstimatedShippingDaysDetails = this.page.locator('//input[@id="deliveryEstimate[minimumValue]"]');
    private maximumEstimatedShippingDays = this.page.locator('//input[@placeholder="max"]');
    private saveButton = this.page.locator('//span[contains(text(),"Save")]');

    async clickOnProductCatalogueTab() {
        await this.productCatalogueTab.click();
    }

    async clickOnShippingRatesTab() {
        await this.shippingRatesTab.click();
    }

    async clickOnCreateShippingRatesTab() {
        await this.createShippingRatesTab.click();
  
    }

    async fillAmount(amount: string) {
        await this.setAmount.fill(amount);
    }

    async fillDescription(description: string) {
        await this.descriptionDetails.fill(description);
    }

    async fillMinimumEstimatedShippingDays(minimumEstimatedShippingDays: string) {
        await this.minimumEstimatedShippingDaysDetails.fill(minimumEstimatedShippingDays);
    }

    async fillMaximumEstimatedShippingDays(maximumEstimatedShippingDays: string) {
        await this.maximumEstimatedShippingDays.fill(maximumEstimatedShippingDays);
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }
}