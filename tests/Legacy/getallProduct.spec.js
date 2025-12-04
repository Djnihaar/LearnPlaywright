import { test, expect } from '@playwright/test';

test('varify Get all Product Name', async ({ page }) => {
  
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    const productnames = await page.locator('.product-name').allTextContents()
    console.log(productnames)
    const firstproductname = await page.locator('(//h4[@class="product-name"])[1]').textContent()
    console.log(firstproductname)
  
});