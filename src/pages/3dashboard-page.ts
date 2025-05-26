import { expect, Page } from "@playwright/test";

export class DashboardPage {

    constructor(public page: Page) {
        this.page = page;
    }

    // Locators using XPath
    public dashboardHeader = this.page.locator('//h1[contains(text(),"Dashboard")]');
    public totalOrdersBox = this.page.locator('//div[@id="dashboard-order"]/..//div[@class="float-end"]');
    public totalSalesBox = this.page.locator('//div[@id="dashboard-sale"]/..//div[@class="float-end"]');
    public totalCustomersBox = this.page.locator('//div[@id="dashboard-customer"]/..//div[@class="float-end"]');
    public viewMoreLink = this.page.locator('//a[contains(text(),"View more...")]');

    async verifyDashboardHeader() {
        await expect(this.dashboardHeader).toBeVisible();
    }

    async verifyTotalOrdersVisible() {
        await expect(this.totalOrdersBox).toBeVisible();
    }

    async verifyTotalSalesVisible() {
        await expect(this.totalSalesBox).toBeVisible();
    }

    async verifyTotalCustomersVisible() {
        await expect(this.totalCustomersBox).toBeVisible();
    }

    async clickViewMore() {
        await this.viewMoreLink.click();
    }
}
