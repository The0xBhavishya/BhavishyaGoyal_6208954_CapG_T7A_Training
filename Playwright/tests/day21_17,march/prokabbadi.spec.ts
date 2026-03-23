import {test} from "@playwright/test"

test.afterEach("",async()=>{
  console.log("after each ");
  
})


test.afterAll("",async()=>{
  console.log("after all ");
  
})



test("test1",async()=>{
    console.log("test1");
})


test("test2",async()=>{
    console.log("test2");
})

test("kabaddi score ", async({page})=>{
await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent")
let a= await page.locator(" (//div/p[@class='match-count'])[1] | (//p[text()='Dabang Delhi K.C.'] | //p[text()='31'] )[1]  | (//p[text()='31'])[1] | (//p[text()='28'])[1] | (//p[text()='Puneri Paltan'])[1] | (//p[text()='Thyagaraj Indoor Stadium, Delhi'])[1]  " ).allTextContents()
console.log(a)


})

// test("Call function Amazon", async ({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes')
//     await page.locator('//input[@id="nav-search-submit-button"]').click()
//     await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').first().waitFor()
//     let e = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').all()
//     console.log(e)
// })


