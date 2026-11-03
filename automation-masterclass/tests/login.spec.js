
const { test, expect } = require('@playwright/test');

test('My first browser automation test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    console.log('My first automation test passed!');

});
