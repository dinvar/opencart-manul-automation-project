import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { TransactionPage } from '../pages/transactionPage';
import { HomePage } from '../pages/HomePage';
import { CustomersPage } from '../pages/CustomersPage';

test('Validate No Remaining Customer Cash Balance Message Displayed if Balance is zero', async() =>{
    //chrome --remote-debugging-port=9222 --user-data-dir="C:\chrome-session"

    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
  
    await page.bringToFront();

    const customersPage : CustomersPage = new CustomersPage(page);
    await customersPage.clickOnCustomersTab();
    await customersPage.clickOnRemainingBalanceTab();
    await customersPage.verifyNoRemainingBalanceMessageDisplayed();
});
    