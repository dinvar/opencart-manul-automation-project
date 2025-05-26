import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async login(username: string, password: string) {
        await this.page.fill('//input[@id="input-username"]', username);
        await this.page.fill('//input[@id="input-password"]', password);
        await this.page.click('//button[@type="submit"]');
    }
}
