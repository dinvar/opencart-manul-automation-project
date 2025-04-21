import { test, expect, Browser } from '@playwright/test';
import { chromium } from 'playwright';
import { CustomersPage } from '../pages/CustomersPage';
import fs from 'fs';
import csv from 'csv-parser';

// Function to read CSV file data
async function readCSV(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
}

test('Add New Customer In Customers List', async () => {    //test 
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    test.setTimeout(90000);

    await page.bringToFront();

    // Read customer data from CSV file
    const customerData1 = await readCSV('src/testdata/CreateCusto1.csv');

    //Loop over CSV data and create a new customer for each entry
    for (const customer of customerData1) {
        const customersPage: CustomersPage = new CustomersPage(page);
        await customersPage.clickOnCustomersTab();
        await customersPage.clickAddCustomerButton();
        await customersPage.clickOnNameTab();
        await customersPage.fillCustomerNameInput(customer.name); // Use name from CSV
        await customersPage.fillAccountEmail(customer.email);     // Use email from CSV
        await customersPage.clickOnAddCustomerButton();
        await customersPage.clickOnRemainingBalanceTab();
        await customersPage.verifyNoRemainingBalanceMessageDisplayed();
    }
});
        // Optional: Add assertions to verify the customer was added
        // await expect(page.locator('//input[contains(@id,"billing")]')).toHaveValue(customer.name);
        //await expect(page.locator('//input[@data-testid="customer-email-input"]')).toHaveValue(customer.email);
    

    // Close the browser at the end of the test
    //await browser.close();

