import { Page, expect } from "@playwright/test";

export class ProductShippingPage {
    constructor(private page: Page) {
        this.page = page;
    }

    private shippingTab = this.page.locator('//a[contains(text(),"Extensions")]');
    private shippingMethods = this.page.locator('//a[text()="Shipping"]');
    private flatRateEditButton = this.page.locator('//td[contains(text(),"Flat Rate")]/following-sibling::td//a[@data-original-title="Edit"]');

    private costField = this.page.locator('//input[@id="input-cost"]');
    private taxClassDropdown = this.page.locator('//select[@id="input-tax-class"]');
    private geoZoneDropdown = this.page.locator('//select[@id="input-geo-zone"]');
    private statusDropdown = this.page.locator('//select[@id="input-status"]');
    private sortOrderField = this.page.locator('//input[@id="input-sort-order"]');

    private saveButton = this.page.locator('//button[@data-original-title="Save"]');

    async navigateToFlatRateShipping() {
        await this.shippingTab.click();
        await this.shippingMethods.click();
        await this.flatRateEditButton.click();
    }

    async updateShippingDetails(cost: string, taxClass: string, geoZone: string, status: string, sortOrder: string) {
        await this.costField.fill(cost);
        await this.taxClassDropdown.selectOption({ label: taxClass });
        await this.geoZoneDropdown.selectOption({ label: geoZone });
        await this.statusDropdown.selectOption({ label: status });
        await this.sortOrderField.fill(sortOrder);
    }

    async saveShippingDetails() {
        await this.saveButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.page.locator('//div[contains(@class,"alert-success")]')).toBeVisible();
    }
}
