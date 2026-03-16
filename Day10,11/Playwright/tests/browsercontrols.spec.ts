import {test} from "@playwright/test"
import console from "node:console"


test("browser controls",async({browser})=>{
    let context =await browser.newContext()
let page= await context.newPage()
let size =await page.viewportSize()
console.log(size)
await page.setViewportSize({width:2800,height:1800})
console.log(await page.viewportSize());



 await page.goto("https://amazon.com")
//  console.log(await page.close());

// await browser.close();
//  await page.goto("https://amazon.com")

let time=new Date().getTime()
await page.screenshot({path:`screenshot/${time}.png`})


console.log(await context.cookies());
console.log(await context.pages);

})





