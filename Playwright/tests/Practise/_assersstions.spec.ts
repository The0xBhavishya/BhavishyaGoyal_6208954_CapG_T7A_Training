import {test,expect} from "@playwright/test"

test("asserrstion", async({page})=>{
await page.goto("https://www.saucedemo.com/")

await expect(page.locator('.submit-button.btn_action')).toHaveCount(1);
await expect(page.locator('.submit-button.btn_action')).toBeEnabled();
// await expect(page.locator('.submit-button.btn_action')).toBeDisabled();
await expect(page.locator('.submit-button.btn_action')).toBeVisible()
await expect (page.locator('.submit-button.btn_action')).toBeVisible()
await expect (page.locator('.submit-button.btn_action')).toHaveText('Login')

})


