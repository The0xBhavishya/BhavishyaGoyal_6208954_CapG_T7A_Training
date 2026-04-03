import {test,expect} from "@playwright/test"

test('iframes', async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/')


// 1. total number of frames 
const frames = page.frames()
console.log(frames.length)


//. Approach 1 using  page.frame()
const frame = page.frame({url :"https://ui.vision/demo/webtest/frames/frame_1.html" })

if(frame){
    // frame.locator('[name="mytext1"]').fill('bhavishya')
    // other method to pass locator,what to fill like below
    await frame.fill('[name="mytext1"]','bg')

await page.waitForTimeout(1000)
}
else{
    console.log("Frame is not available")
}

await page.waitForTimeout(1000)










})



test.only ('frame 2 ' , async({page})=>{
const frame2=  page.frameLocator('[src="frame_3.html"]')
})