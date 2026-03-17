import{test} from "@playwright/test"

test("css selector",async({page})=>{
//   await page.goto('https://practicetestautomation.com/practice-test-login/')


  await page.goto('https://techbeamers.com/practice-test-login/')

await page.locator('#username');
await page.locator("input#username")
await page.locator('button[type="submit"]')
await page.locator('button')

// //label[text()="Gender:"]  , //input[@class="form-control" and @id="phone"]
//  //h2[text()="Alerts & Popups"]

// await page.locator("input#usern).fill("studen
// t")

// await page.locator('input#password').fill("Password123")




// 1. <input type="text" id="username" name="username" required="">
//   [name="username"]
// input#username



// <button id="submit" class="btn">Submit</button>
//  can combine id and class  like this #submit.btn


//  footer#site-footer.site-footer    tag#id.class

//  error





// await page.locator('button#submit').click()
// await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()
})