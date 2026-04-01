import {test,expect} from '@playwright/test';

test('alert with ok' , async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog', async dialog =>{
expect(dialog.type()).toContain('alert')
 expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept()
})

await page.locator('[id="alertBtn"]').click()
await page.waitForTimeout(5000);

})




test('dialog - confirm with ok and cancel ' , async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog', async dialog =>{
expect(dialog.type()).toContain('confirm') // confirm type dialag contains ok and cancel
 expect(dialog.message()).toContain('Press a button!') //
 await dialog.accept() // close window by choosing ok button
//  await dialog.dismiss() // close window by using cancel
})

await page.click('[id="confirmBtn"]')
await page.waitForTimeout(5000);

})