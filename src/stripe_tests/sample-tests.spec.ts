import test, { Browser, chromium, expect, Page } from "playwright/test";

test('[@sanity] Login with valid credentials', async () => {
    const browser : Browser = await chromium.launch({
        headless:false
    });
    const page : Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // await expect(page).toHaveURL('inventory');
  });
  

  test('[@sanity] Login with valid credentials1', async () => {
    const browser : Browser = await chromium.launch({
        headless:false
    });
    const page : Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // await expect(page).toHaveURL('inventory');
  });
  
  test('[@regression] Login with valid credentials2', async () => {
    const browser : Browser = await chromium.launch({
        headless:false
    });
    const page : Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // await expect(page).toHaveURL('inventory');
  });
  
  test('[@regression]Login with valid credentials3', async () => {
    const browser : Browser = await chromium.launch({
        headless:false
    });
    const page : Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // await expect(page).toHaveURL('inventory');
  });
  
  test('[@sanity] Login with valid credentials4', async () => {
    const browser : Browser = await chromium.launch({
        headless:false
    });
    const page : Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // await expect(page).toHaveURL('inventory');
  });
  