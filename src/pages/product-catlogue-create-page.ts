import { expect, Page } from '@playwright/test'

export class CreateProduct {
    constructor(private page : Page) {
        this.page = page
    }
    //test1
    private productCatlogue = this.page.locator('//a[@data-testid="primary-nav-item-link-products"]');
    private createProduct = this.page.locator('//a[@data-testid="new-product-button"]');
    private name = this.page.locator('//input[@data-testid="product-builder-name-field"]');
    private amount = this.page.locator('//input[@data-testid="simple-form-amount-input"]');
    private addProduct = this.page.locator('//a[@data-testid="product-builder-submit-button"]');
    //test2
    private features = this.page.locator('//a[@data-collection-id="products.features"]');
    private createFeatures = this.page.locator('//button[@data-testid="create-feature-button"]');
    private featureName = this.page.locator('//input[@data-testid="feature-name-input"]');
    private createButton = this.page.locator('//span[@data-testid="save-button"]//a');

    private featuresNames = '//div[text() = "*feature name*"]';
    private attachToProduct = this.page.locator('//a[text() = "Attach to product"]');
    private chooseAProduct = this.page.locator('//a[@data-testid="searchable-product-input"]');
    private select  = this.page.locator('//div//*[contains(text(), "Table Fan")]');
    private confirm = this.page.locator('//a[@data-testid="confirm-attach-button"]');

    async selectFeatureName(name: string) {
        var xpath = await this.featuresNames.replace("*feature name*", name)
        await this.page.locator(xpath).click();
    }

    async clickOnProductCatTab() {
        await this.productCatlogue.click()
    }
    async clickOnCreateProTab() {
        await this.createProduct.click()
    }
    async fillName(name: string) {
        await this.name.fill(name)
    }
    async fillAmount(amount: string) {
        await this.amount.fill(amount)
    }
    async clickOnAddProduct() {
        await this.addProduct.click()
    }

    async clickOnFeaturesTab() {
        await this.features.click()
    }
    async clickOnCreateFeaturesButton() {
        await this.createFeatures.click()
    }
    async fillFeatureNameInput(featureName: string) {
        await this.featureName.fill(featureName)
    }
    async clickOnCreateButton() {
        await this.createButton.click()
    }
    async clickOnAttachToProductTab() {
        await this.attachToProduct.click()
    }
    async clickOnChooseAProduct() {
        await this.chooseAProduct.click()
    }
    async clickOnSelect() {
        await this.select.click()
    }
    async clickOnConfirmButton() {
        await this.confirm.click()
    }





}