
const { expect } = require('@playwright/test');

async function navigateTo(page, url) {
    await page.goto(url);
}

async function enterText(page, locator, value) {
    await page.locator(locator).fill(value);
}

async function clickElement(page, locator) {
    await page.locator(locator).click();
}

async function verifyTitle(page, expectedTitle) {
    await expect(page).toHaveTitle(expectedTitle);
}

module.exports = {
    navigateTo,
    enterText,
    clickElement,
    verifyTitle
};
