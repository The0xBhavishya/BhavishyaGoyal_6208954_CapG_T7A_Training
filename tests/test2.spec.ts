import{test} from "@playwright/test"

// test("title",()=>{
// console.log("hii");
// })


test("title",async({browser,browserName}) =>{
let context =await browser.newContext()
let page= await context.newPage()
let page2=await context.newPage()


// await page.goto("httgoogle.com")
 await page.goto("https://amazon.in");
await page.locator("input#twotabsearchtextbox").fill("shoes")
console.log(browserName);

await page.pause()

 await page2.goto("https://www.flipkart.com/");

})

// test("title",async({page}) =>{
// // await page.goto("httgoogle.com")
//  await page.goto("https://amazon.in");
// await page.locator("input#twotabsearchtextbox").fill("shoes")
// })




