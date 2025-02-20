const { test,expect } = require('@playwright/test');

test('Home Page', async ({page})=>{
await page.goto('https://korafoodstreet.com/');

const specialfood = await page.title();
console.log(specialfood);

await expect(page).toHaveTitle(/Food/i);

const pageURL = await page.url();
console.log(pageURL);

await expect(page).toHaveURL(/korafoodstreet\.com/);
await page.close();

});