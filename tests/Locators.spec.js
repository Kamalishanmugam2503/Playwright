//const {test, expect} = require ('@playwright/test')
import {test, expect} from '@playwright/test'
test('Locators', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');

//click on login button ----------> property
    //await page.locator('id="login2').click()
    await page.click('id=login2')
    
//provide username ---------> css
    //await page.loactor('#loginusername').fill('kamali')
    await page.fill('#loginusername', 'kamali')
    //await page.type('#loginusername')

    //provide password
    await page.fill("input[id='loginpassword']",'kamali0123')
    await page.click("//button[normalize-space()='Log in']")
    //await page.waitForTimeout(5000);
    await page.close()
})