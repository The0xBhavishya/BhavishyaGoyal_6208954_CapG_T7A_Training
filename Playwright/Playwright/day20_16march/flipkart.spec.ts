import { test } from '@playwright/test'
import FlipkartPage from '../../PageObjectModel/flipkart.page.ts'

test("Flipkart Gudi Padwa Store Scenario", async ({ page }) => {

    const flipkart = new FlipkartPage(page)
   await flipkart.navigate("https://www.flipkart.com")
   const closeBtn = page.getByRole('button', { name: '✕' });
    if (await closeBtn.isVisible()) {
        await closeBtn.click();
    }
  //    await flipkart.enterMobile("9521842144")
  //  await flipkart.clickGetOtp()

   
    await flipkart.clickHome()
    await flipkart.openGudiPadwaStore()
     await flipkart.selectProduct5()
     await flipkart.selectProduct8()
    

})