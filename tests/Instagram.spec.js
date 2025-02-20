import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/accounts/login/?hl=en');
  await page.getByRole('textbox', { name: 'Phone number, username, or' }).click();
  await page.getByRole('textbox', { name: 'Phone number, username, or' }).fill('rdrdrdr');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tdtcc');
  await page.locator('div').filter({ hasText: /^Log in$/ }).first().click();
  await page.getByText('or', { exact: true }).click();
  await page.getByRole('img', { name: 'Instagram' }).click();
  await page.getByRole('img', { name: 'Instagram' }).click();
});