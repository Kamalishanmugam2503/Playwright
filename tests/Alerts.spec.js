const {test, expect} = require("@playwright/test");

test.skip("Alert with ok", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html")

    //enabling dialog window handler
    page.on("dialog", async (dialog) => {
        await dialog.accept();
        
    });

    await page.click("#alertBtn");
    await page.waitForTimeout(7000);
});

test.skip("Alert with ok and cancel", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com");
    page.on("dialog with ok", async (dialog) => {
        await dialog.dismiss();
    });


    //enabling dialog window handling
   //page.on("dialog", async (dialog)) => {
        //await dialog.accept();
       // await dialog.dismiss();
    });