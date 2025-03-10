import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { TransactionPage } from '../pages/transactionPage';
import { HomePage } from '../pages/HomePage';
import testData from '../testdata/CreatePayment.json';

test('Transaction', async() =>{
    //chrome --remote-debugging-port=9222 --user-data-dir="C:\chrome-session"
    //const variableName : ClassName = new ClassName();
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];

    const environment = 'Prod';
  
    await page.bringToFront();

    const homePage : HomePage = new HomePage(page);
    await homePage.clickCreateButton();
    await homePage.clickPaymentButton();
    const transactionPage : TransactionPage = new TransactionPage(page);

    await transactionPage.clickAmount();
    await transactionPage.fillAmount(testData.amount);
    await transactionPage.fillDescription(testData.description);
    await transactionPage.fillStatementDiscriptor(testData.statementDescriptor);
    await transactionPage.fillcardNumber(testData.cardNumber);
    await transactionPage.fillExpiryDate(testData.expiryDate);
    await transactionPage.fillCVCNumber(testData.cvcNumber);
    await transactionPage.fillPostalCode(testData.postalCode);
    await transactionPage.clickSubmitPayment();
});
    