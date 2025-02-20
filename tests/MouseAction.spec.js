import {test, expect} from '@playwright/test';
test('window',async ({page}) => {
    const window = page.locator("//a[text()='Windows']");
    await switchto.hover();
    await window.hover();
    
});