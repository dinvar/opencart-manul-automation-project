import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { CustomersPage } from '../pages/CustomersPage';
import testData from '../testdata/CreateCustomer.json';

test('Add New Customer In Customers List', async () => {
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    test.setTimeout(90000);

    await page.bringToFront();


    const customersPage: CustomersPage = new CustomersPage(page);
     
    await customersPage.clickOnCustomersTab();
    await customersPage.clickAddCustomerButton();
    await customersPage.clickOnNameTab();
    await customersPage.fillCustomerNameInput(testData.name);
    await customersPage.fillAccountEmail(testData.email);
    await customersPage.clickOnAddCustomerButton();
    await customersPage.clickOnRemainingBalanceTab();
    await customersPage.verifyNoRemainingBalanceMessageDisplayed();
});
    // async function readCSV(filePath: string): Promise<any[]> {
    //     return new Promise((resolve, reject) => {
    //         const results: any[] = [];
    //         fs.createReadStream(filePath)
    //             .pipe(csv())
    //             .on('data', (data) => results.push(data)
    //             .on('end', () => resolve(results))
    //             .on('error', (err) => reject(err));
    //     }):
    // }

    // test('Add New Custo through CSV', async () => {
    //     const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    //     const context = browser.contexts()[0];
    //     const page = context.pages()[0];
    //     test.setTimeout(90000);
    //     await page.bringToFront();

    //     const customersPage: CustomersPage = new CustomersPage(page);
    //     await customersPage.clickOnCustomersTab();
    //     const data = await readCSV('src/testdata/CreateCusto1.csv');
    
        