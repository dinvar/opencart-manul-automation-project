import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { TransactionPage } from '../pages/transactionPage';
import { HomePage } from '../pages/HomePage';

test('Transaction', async() =>{
    //chrome --remote-debugging-port=9222 --user-data-dir="C:\chrome-session"

    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
  
    await page.bringToFront();

    const homePage : HomePage = new HomePage(page);
    await homePage.clickCreateButton();
    await homePage.clickPaymentButton();
    const transactionPage : TransactionPage = new TransactionPage(page);
    // await transactionPage.clickOneTime(); 
    // await page.waitForTimeout(90000);
    await transactionPage.clickAmount();
    await transactionPage.fillAmount();
    await transactionPage.fillDescription();
    await transactionPage.fillStatementDiscriptor();
    await transactionPage.fillcardNumber();
    await transactionPage.fillExpiryDate();
    await transactionPage.fillCVCNumber();
    await transactionPage.fillPostalCode();
    await transactionPage.clickSubmitPayment();
});
    