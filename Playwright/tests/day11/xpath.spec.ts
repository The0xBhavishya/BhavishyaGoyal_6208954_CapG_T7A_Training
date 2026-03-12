import {test} from "@playwright/test";

test("login using xpath",async({page})=>{
  
  await page.goto("https://www.amazon.com/")
 await page.locator('//input[@id="twotabsearchtextbox"]').fill('samsung phones')
 await page.locator('//input[@id="nav-search-submit-button"]').click();
 
//  let a =await page.locator('(//span[@class="a-price-whole"])[1]');
 let a =await page.locator('(//span[@class="a-price-whole"])').first();
   console.log(await a.textContent());

   
console.log("second phone ")
 let b =await page.locator('(//span[@class="a-price-whole"])').nth(2);



  console.log(await b.textContent());


 

});
// //span[text()="19,999"]

// <span class="a-price-whole">118,417<span class="a-price-decimal">.</span></span>