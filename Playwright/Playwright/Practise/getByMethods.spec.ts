import {test} from "@playwright/test"

test("getByMethod " , async({page})=>{
await page.goto("https://demo.nopcommerce.com/login");
await page.getByLabel('Email:').fill('bhavishya0110@gmail.com')
await page.getByPlaceholder('Search store').fill('mobile')
// console.log(await page.getByText('New Custo',{exact:true}).textContent());
console.log(await page.getByText('New Custo').textContent());
// await page.getByRole('button',{name :'Search'}).click();



// getByPlaceHolder



})