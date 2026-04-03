import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {

    test.setTimeout(60000);  // 60sec
    // to change global time set time in playwrightconfig.js  under defaultconfig as 
    // timeout :60000,    and for expect in globally use  expect : {timeout:60000},
  await page.goto('https://demowebshop.tricentis.com/');

  //Assertions - Auto wait works
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
  await expect(page.locator('text=Welcome to our store')).toBeVisible();
  // add custom time in expectations
  await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:60000});

  //Actions - Auto wait works
  await page.locator('#small-searchterms').fill("Laptop",{force:true}); //search box - Force action( it will not so actionable
  await page.locator('.button-1.search-box-button').click({force:true}); // clicking on search button -Force action





});