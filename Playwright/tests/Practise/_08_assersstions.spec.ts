import {test, expect} from "@playwright/test"
import { log } from "node:console";

// soft assertion means test is continue after fail
test('asserr' , async({page})=>{
await page.goto('https://kitchen.applitools.com/');
await page.pause()

//check element present or not
await expect (page.locator('.chakra-heading.css-dpmy2a')).toHaveCount(1)
if(await page.$('.chakra-heading.css-dpmy2a') ){
    await page.locator('.chakra-heading.css-dpmy2a').click()
}


// check element hidden or visible
await expect (page.locator('.chakra-heading.css-dpmy2a')).toBeVisible();
// await expect.soft(page.locator('.chakra-heading.css-dpmy2a')).toBeHidden();

//check element enabled or not
await expect (page.locator('.chakra-heading.css-dpmy2a')).toBeEnabled();
// await expect.soft(page.locator('.chakra-heading.css-dpmy2a')).toBeDisabled();

// text matches value or not 
await expect (page.locator('.chakra-heading.css-dpmy2a')).toHaveText('The Kitchen');
// await expect (page.locator('.chakra-heading.css-dpmy2a')).not.toHaveText('The Kitchen');

//   check attributes values
await page.pause()
await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveAttribute('class',/.*css-dpmy2a/)
await expect(page.locator('.chakra-heading.css-dpmy2a')).toHaveClass(/.*css-dpmy2a/)

await expect(page).toHaveURL('https://kitchen.applitools.com/')
await expect(page).toHaveTitle('/*Kitchen')
await expect(page).toHaveTitle('The Kitchen')

})