import { test, Browser, chromium } from "@playwright/test";
import { SelectCustoName } from "../pages/dynamic-Xpath";

test('[@sanity] select customer', async() => {
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
        const context = browser.contexts()[0];
        const page = context.pages()[0];
    
        const environment = 'Prod';
      
        await page.bringToFront();

    const selectCustomer = new SelectCustoName(page);
    
    await selectCustomer.selectCusto("Millar Brown");

    
});