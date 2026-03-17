// Import Playwright module
// Write a Test
// Go to URL
// Search with keywords
// Click on playlist
// Validate Web Page title

import {test,expect} from "@playwright/test"

test("test id ", async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@id="user-name"]').fill('standard_user')
await page.locator('//input[@id="password"]').fill('secret_sauce')
await page.locator('//input[@value="Login"]').click()
await page.locator('text="Sauce Labs Backpack"').click()
// await page.getByRole('combobox', { name: 'Search' }).fill('playwright by test talk')
// await page.getByRole('combobox', { name: 'Search' }).press('Enter')
// await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()


})
