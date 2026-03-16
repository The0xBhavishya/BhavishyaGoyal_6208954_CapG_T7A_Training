// Import Playwright module
// Write a Test
// Go to URL
// Search with keywords
// Click on playlist
// Validate Web Page title

import{test, expect} from '@playwright/test'

test('My first Playwright TypeSceript Test',async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.locator('span[@class="title"]')
    


})
