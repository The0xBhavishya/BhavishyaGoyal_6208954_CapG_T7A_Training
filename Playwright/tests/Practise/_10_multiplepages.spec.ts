import { test, expect } from '@playwright/test';

test('multiple tabes', async ({ browser}) => {
const context = await browser.newContext();
const page =  await context.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const pagePromise =context.waitForEvent('page')
await page.locator('a[href="http://www.orangehrm.com"]').click();

const newPage=await pagePromise;

await newPage.locator('input[type="email"]').fill('bhavishyagoyal0110@gmail.com');

})


