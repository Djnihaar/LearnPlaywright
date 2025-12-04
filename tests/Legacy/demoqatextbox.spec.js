import { test, expect } from '@playwright/test';

test('varify text box', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Nihar Patra');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('niharpatra38@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Odisha');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Nihar Patra')).toBeVisible();
  await expect(page.getByText('Email:niharpatra38@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore')).toBeVisible();
  await expect(page.getByText('Permananet Address :Odisha')).toBeVisible();
});