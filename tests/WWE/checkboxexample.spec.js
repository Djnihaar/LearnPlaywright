import { test, expect } from "@playwright/test";

test("Verify Creating rediff account", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await expect(page.locator("#checkBoxOption2")).not.toBeChecked();
  await page.locator("#checkBoxOption2").check();
  const status_checkbox = await page.locator("#checkBoxOption2").isChecked();
  console.log(status_checkbox);

  if (!status_checkbox) {
    await page.locator("#checkBoxOption2").check();
  }
  await expect(page.locator("#checkBoxOption2")).toBeChecked();
});

test("Multiple Check boxes example", async ({ page }) => {
  // await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  //await page.locator('//input[@type="checkbox"]').check()
  //  const checkboxes = [
  //     '//input[@name="checkBoxOption1"]',
  //     '//input[@name="checkBoxOption2"]',
  //     '//input[@name="checkBoxOption3"]'
  //   ]
  // for (let checkbox of checkboxes){
  //     await page.locator(checkbox).check()
  // }
  // $$ will get all matching elements in an array
});

test("Multiple Check boxes example 2", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //const checkboxes = await page.$$('//input[@name="checkBoxOption1"]') //[]

  const checkboxes = await page.$$('//input[@type="checkbox"]'); //[]

  for (let checkbox of checkboxes) {
    await checkbox.check();
  }

  // $$ will get all matching elements in an array
});

test("Multiple Check boxes example - 2", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  const addtocartbuttons = await page.$$(
    '//div[@class="product-action"]/button'
  ); //[]

  for (let button of addtocartbuttons) {
    await button.click();
    await page.waitForTimeout(1000);
    await expect(checkbox).toBeChecked();
  }
});

test("Add all items to cart example - 3", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  const checkboxes = page.locator('//input[@type="checkbox"]');
  const count = await checkboxes.count();

  for (let i = 0; i < count; i++) {
    const checkbox = checkboxes.nth(i);

    await checkbox.check();
    await page.waitForTimeout(1000);

    await expect(checkbox).toBeChecked();
  }
});

test("Radio button example - 1", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await page.locator('//input[@name="radioButton"]').first().check();
  await expect(page.locator('//input[@name="radioButton"]').first()).toBeChecked();
    await page.waitForTimeout(2000);
   // await page.locator('//input[@name="radioButton"]').first().uncheck();
});
