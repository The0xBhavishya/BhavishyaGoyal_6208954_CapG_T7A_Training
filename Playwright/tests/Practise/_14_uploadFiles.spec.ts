import {test, expect} from '@playwright/test';

test("upload files", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
     await page.locator('#file-upload').click()
    await page.locator('#file-upload').setInputFiles('Playwright/tests/Practise/screencapture-topbrains-batches-assessment-details-2026-03-30-22_47_59.pdf')
    await page.locator('#file-submit').click()
        await page.waitForTimeout(500)
})


test("upload files__", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.setInputFiles('#file-upload', 'Playwright/tests/Practise/screencapture-topbrains-batches-assessment-details-2026-03-30-22_47_59.pdf')
    await page.locator('#file-submit').click()
        await page.waitForTimeout(500)
})


test.only("upload multi-files__", async ({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    // await page.pause()
    await page.locator('#filesToUpload').setInputFiles(['Playwright/tests/Practise/5th_sem_result.pdf','Playwright/tests/Practise/topBrains.pdf'])
      await page.waitForTimeout(500)
   expect(await page.locator('#fileList li:nth-child(1)')).toHaveText("5th_sem_result.pdf")

        await page.waitForTimeout(500)
})


