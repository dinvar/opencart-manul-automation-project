import { test, expect, Browser, Page, Locator, chromium} from '@playwright/test';
import { RegisterInterest } from '../pages/connect-capital-page';
import testdata from '../testdata/capitalRegisterInt.json';

test('In Capital RegisterInterst', async() => {
    const browser: Browser = await chromium.connectOverCDP('http://localhost:9222');
    const context = browser.contexts()[0];
    const page = context.pages()[0];

    const environment = 'Prod';
  
    await page.bringToFront();
    //await new Promise (() =>{});
    const registerInterest = new RegisterInterest(page);
    await registerInterest.clickOnConnectTab();
    await registerInterest.clickOnCaptialTab();
    await registerInterest.clickOnRegisterInterestButton();
    await registerInterest.fillFirstName(testdata.firstName);
    await registerInterest.fillLastName(testdata.lastName);
    await registerInterest.fillWorkEmail(testdata.workEmail);
    await registerInterest.fillCompanyWebsite(testdata.companyWebsite);
    await registerInterest.clickAndSelectCountry(testdata.country);
    await registerInterest.clickOnCustomersDropDown(testdata.customerType);
    await registerInterest.clickOnCustomerLocationTab(testdata.customerRegion);
    await registerInterest.clickOnCryptoDropDown(testdata.usesCrypto);
    await registerInterest.clickBusinessExpCard(testdata.hasBusinessExperienceCard);
    await registerInterest.clickOnEstimatedVolume(testdata.estimatedVolume);
    await registerInterest.clickFunding(testdata.fundingStatus);
    await registerInterest.clickOnSubmitButton();

});
