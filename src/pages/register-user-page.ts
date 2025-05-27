import { Page } from "@playwright/test";

export class RegisterPage {
  constructor(private page: Page) {}

  // XPath locators
  private myAccountMenu = this.page.locator('//span[text()="My Account"]');
  private registerLink = this.page.locator('//a[text()="Register"]');
  private firstNameField = this.page.locator('//input[@id="input-firstname"]');
  private lastNameField = this.page.locator('//input[@id="input-lastname"]');
  private emailField = this.page.locator('//input[@id="input-email"]');
  private telephoneField = this.page.locator('//input[@id="input-telephone"]');
  private passwordField = this.page.locator('//input[@id="input-password"]');
  private confirmPasswordField = this.page.locator('//input[@id="input-confirm"]');
  private agreeCheckbox = this.page.locator('//input[@name="agree"]');
  private continueButton = this.page.locator('//input[@value="Continue"]');

  async gotoRegisterPage() {
    await this.page.goto("https://www.opencart.com/index.php?route=cms/demo");
    await this.myAccountMenu.click();
    await this.registerLink.click();
  }

  async registerUser(firstName: string, lastName: string, email: string, phone: string, password: string) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.telephoneField.fill(phone);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.agreeCheckbox.check();
    await this.continueButton.click();
  }
}
