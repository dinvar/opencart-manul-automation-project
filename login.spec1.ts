import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { firefox, chromium, webkit } from 'playwright';

test('login test', async ({ page, testInfo }) => {
    // Launch the browser
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // Locate elements
    const emailID: Locator = page.locator('#input-email');
    const password: Locator = page.locator('#input-password');
    const loginButton: Locator = page.locator("[value='Login']"); // Use single quotes around 'Login'

    // Fill login form
    await emailID.fill("jadhavravikiran1997@gmail.com");
    await password.fill("ravi");
    await loginButton.click();

    // Wait for the page to load after login
    await page.waitForLoadState('networkidle');
    const screenshot = await page.screenshot();
    testInfo.attach('screenshot', {
      contentType: 'image/png',
      body: screenshot,
    });
  
    // Get the page title and assert
    const title = await page.title();
    console.log("Home page title: ", title);

    expect(title).toBe('My Account'); // Use `.toBe` for strict equality

    // Take a screenshot
    await page.screenshot({ path: 'homepage.png' });

    // Close the browser
    await browser.close();
});
