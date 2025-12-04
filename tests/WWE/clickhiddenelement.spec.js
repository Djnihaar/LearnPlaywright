// import { test, expect } from "@playwright/test";


// test(`Verify User can Add Employee`, async ({psge})=> {


//     await page.goto('https://playwright.dev/java/');

   
// });


import { test, expect } from "@playwright/test";

test(`Drop down value Select`, async ({ page }) => {

  await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
  await page.waitForTimeout(2000);
  // Using text
  // await page.locator('select[name^="DOB_Month"]').selectOption("JUL")
  //await page.reload()

  // Using value
  //await page.locator('select[name^="DOB_Month"]').selectOption({ value: '04' });

  // Using index
   await page.locator('select[name^="DOB_Month"]').selectOption({ index: 8 });
  


});

