import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('4587');
});