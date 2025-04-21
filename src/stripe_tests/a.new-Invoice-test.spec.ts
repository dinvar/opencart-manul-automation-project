import {test,expect,Browser,Page,Locator,BrowserContext} from "@playwright/test";
import { InvoicesPage } from "../pages/a.new-InvoicePage";
import { chromium,firefox,webkit} from 'playwright'

test('Check Dynamic Xpath with new invoice', async() => {
    
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');

    const context = browser.contexts()[0];
    const page = context.pages()[0];

    const environment = 'Prod';
  
    await page.bringToFront();

    const invoicesPage = new InvoicesPage(page);

    
    await invoicesPage.clickOnTestInvoiceButton();
    await invoicesPage.clickCustomerName();
    await invoicesPage.selectCustomerName("Millar Brown");
    await invoicesPage.selectCustoEmail("millarbrown@gmail.com")
    await invoicesPage.fillAddItems("Washing Machine");
    await invoicesPage.fillSetQuantity("1");
    await invoicesPage.fillSetPrice("$10");
    await invoicesPage.clickSaveInvoiceButton();
    // await page.waitForTimeout(5000);
    await browser.close();




});