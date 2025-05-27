import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/register-user-page";
import * as data from "../test-data/registerData.json";

test('User can register successfully using JSON data', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.gotoRegisterPage();

  // Use timestamp to avoid email duplication
  const uniqueEmail = `${data.emailPrefix}${Date.now()}@test.com`;

  await registerPage.registerUser(
    data.firstName,
    data.lastName,
    uniqueEmail,
    data.phone,
    data.password
  );

  const successHeading = await page.locator('//div[@id="content"]/h1').textContent();
  expect(successHeading?.trim()).toBe("Your Account Has Been Created!");
});
