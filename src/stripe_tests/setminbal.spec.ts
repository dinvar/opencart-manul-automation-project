import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'
import { BalancesPage } from '../pages/BalancesPage';
import { BusinessSettingPage } from '../pages/BusinessSettingPage';

test('Balances', async() =>{
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];
  
    await page.bringToFront();
    // await page.waitForTimeout(50000);

    const balancePage : BalancesPage = new BalancesPage(page);
    balancePage.clickBalancesTab();
    balancePage.clickSetyourminimumbalance();
    

   const businessSettingPage : BusinessSettingPage = new BusinessSettingPage(page);
   businessSettingPage.clickbankaccountandcurrency();

   businessSettingPage.verifybusinessSettingHeader();
   businessSettingPage.enabletoggleminimumbalance();
    businessSettingPage.fillminimumamount();  
    businessSettingPage.clicksavebutton();

});
