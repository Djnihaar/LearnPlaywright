const { test, expect } = require('@playwright/test');

test('Search for test generator on Playwright.dev', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search').fill('test generator');

  const results = page.locator('.DocSearch-Hit');
  await expect(results.first()).toBeVisible();
  await expect(results).toHaveCountGreaterThan(0);
  
});


