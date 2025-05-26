import { test, expect } from "@playwright/test";
import { DashboardPage } from "../pages/3dashboard-page";

test('Verify dashboard stats and view more in OpenCart Admin', async ({ page }) => {

    // Step 1: Go to Admin Login
    await page.goto('https://your-opencart-site.com/admin');

    // Step 2: Login
    await page.fill('//input[@id="input-username"]', 'admin');
    await page.fill('//input[@id="input-password"]', 'admin');
    await page.click('//button[@type="submit"]');

    // Step 3: Accept popup if any (optional)
    const closePopup = page.locator('//button[@class="btn-close"]');
    if (await closePopup.isVisible()) {
        await closePopup.click();
    }

    // Step 4: Interact with Dashboard
    const dashboard = new DashboardPage(page);

    await dashboard.verifyDashboardHeader();
    await dashboard.verifyTotalOrdersVisible();
    await dashboard.verifyTotalSalesVisible();
    await dashboard.verifyTotalCustomersVisible();
    await dashboard.clickViewMore();

    // Optional: You can validate the redirection after clicking view more
    await expect(page).toHaveURL(/.*order.*/);
});
