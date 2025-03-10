import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { firefox, chromium, webkit } from 'playwright'

test('Transaction2', async({ page }) =>{

    const environment = 'Prod';
    console.log(environment === 'Prod');

});