import { test, Browser, chromium, Page } from "@playwright/test"
import { Webpage } from "../pages/a.web-page" 

test('web table handling', async()=> {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto("https://www.dezlearn.com/webtable-example/");
    const webpage = new Webpage(page);
    await webpage.dynamicName("Mayur Deshmukh", "Welcome");

    await page.waitForTimeout(3000);

});