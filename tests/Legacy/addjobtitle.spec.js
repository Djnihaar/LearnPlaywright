const { test, expect } = require('@playwright/test');

test('Add new Pay Grade', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await page.locator('span:has-text("Admin")').click();
  await page.locator('//span[text()="Job "]').click();
  await page.locator('//a[text()="Pay Grades"]').click();

  await page.locator('//button[normalize-space()="Add"]').click();
  await page.locator('input[placeholder="Name"]').fill('Grade A');
  await page.locator('//button[normalize-space()="Save"]').click();

  await expect(page.locator('.oxd-table-card')).toContainText('Grade A');
});