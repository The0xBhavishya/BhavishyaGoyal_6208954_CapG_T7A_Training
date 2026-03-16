import{test} from "@playwright/test"


test("login using xpath", async ({ page }) => {

  await page.goto('https://techbeamers.com/practice-test-login/');
   await page.locator('//input[@id="username"]').fill('student');
  await page.locator('//input[@id="password"]').fill('Password123');
  await page.locator('//button[@id="submit"]').click();

});

// test("playwight",async(page)=>{



// })