import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}


  private searchBox = this.page.locator('//input[@name="search"]');
  private searchButton = this.page.locator('//button[@class="btn btn-default btn-lg"]');
  private featuredProducts = this.page.locator('//div[@class="product-thumb"]');
  private featuredProductTitles = this.page.locator('//div[@class="product-thumb"]//h4');

  async gotoHomePage() {
    await this.page.goto("https://demo.opencart.com/");
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  async getFeaturedProductCount(): Promise<number> {
    return await this.featuredProducts.count();
  }

  async getFeaturedProductTitles(): Promise<string[]> {
    return await this.featuredProductTitles.allTextContents();
  }
}
