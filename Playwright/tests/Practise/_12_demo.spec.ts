import {test,expect} from "@playwright/test"

test('dialog handle', async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.pause()

  page.on('dialog', (dialog)=>{
    console.log("type of dialog",dialog.type());
    expect(dialog.type()).toContain('alert');

    console.log("dialog message" , dialog.message());
    expect(dialog.message()).toContain('I am an alert box!')

    dialog.accept();
    
})

  await page.click('#alertBtn')
  await page.waitForTimeout(1000)
  await page.close()
  

})