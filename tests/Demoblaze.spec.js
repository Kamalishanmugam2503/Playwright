import { test, expect } from "@playwright/test"

//const {test,expect}=require ('@playwright/test')

test ('Locate multiple elements', async ({page})=> {
   await page.goto('https://www.demoblaze.com/')

   const links = await page.$$('a');
   for(let link of links) {
   const a = await link.textContent();
   console.log(a);
   
   await page.waitForTimeout(5000);
   }

})