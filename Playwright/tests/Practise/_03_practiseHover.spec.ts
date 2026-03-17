import {test,expect} from "@playwright/test"

test("mouse hover",async({page})=>{
    await page.goto("https://demo.opencart.com/");
        await page.waitForLoadState("networkidle")
    await page.locator('.navbar-toggler').click();
    await page.locator('//a[@class="nav-link dropdown-toggle" and text()="Desktops"]').hover()
    await page.locator('//a[text()="Mac (1)"]').click()




})