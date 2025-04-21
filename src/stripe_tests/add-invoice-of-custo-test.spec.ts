import { test, expect, Browser, Page, BrowserContext } from '@playwright/test'; 
import { chromium } from 'playwright'; // importing Chromium as the browser engine
import { InvoicePage } from '../pages/InvoicePage'; // importing the InvoicePage class from your pages directory
import testdata from '../testdata/addInvoice.json';

test('Add an Invoice for a Customer', async () => {
    // Connect to the Chromium browser via CDP (Chrome DevTools Protocol)
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context: BrowserContext = browser.contexts()[0]; // getting the first context
    const page: Page = context.pages()[0]; // getting the first open page (tab)

    // Bring the page to the front and wait for 90 seconds (to ensure everything loads)
    await page.bringToFront();
    //await page.waitForTimeout(90000);

    // Create an instance of the InvoicePage class with the current page
    const firstInvoicePage = new InvoicePage(page);

    // Using the InvoicePage class methods to add a new invoice
    await firstInvoicePage.clickOntestInvoiceTab();  // Click on the 'Create test invoice' tab
    await firstInvoicePage.clickOnCustomerInput();   // Click on the customer input field
    await firstInvoicePage.clickOnAddANewCustomerButton();  // Click 'Add a new customer' button
    await firstInvoicePage.fillCustomerNameInput(testdata.name);  // Fill in customer name
    await firstInvoicePage.fillCustomerEmailInput(testdata.email);  // Fill in customer email
    await firstInvoicePage.clickSaveButton();  // Save the customer details
    await firstInvoicePage.fillItemInput(testdata.item);  // Add item (e.g., "Laptop")
    await firstInvoicePage.fillQtyInput(testdata.quantity);  // Add quantity (e.g., "1")
    await firstInvoicePage.fillPriceInput(testdata.price);  // Add price (e.g., "1200")
    await firstInvoicePage.clickSave();  // Save the invoice

    // Adding some assertions for verification
    await expect(page.locator('//span[contains(text(), "Invoice successfully created")]')).toBeVisible(); // Verifying invoice creation success
});
