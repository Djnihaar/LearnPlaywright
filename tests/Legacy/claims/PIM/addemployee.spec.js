import { test, expect } from '@playwright/test';

import logindata from "../../../testdata/logindata.json"


const employees = {
    emp1: {
        firstName: "Saroj",
        lastName: "R",
        employeeId: "5444s"
    },
     emp2: {
        firstName: "Manish",
        lastName: "Sahu",
        employeeId: "5445m"
    },
        emp3: {
        firstName: "Rakesh",
        lastName: "P",
        employeeId: "5446P"
    }
}

for (let emp in employees) {


test(`verify add Employee - ${employees[emp].firstName}`, async ({ page }) => {

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   //Entering Username
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  //Entering Password
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  //Click on Login Button 
  await page.getByRole('button', { name: 'Login' }).click();

  //assertions

  //Verifying Dashboard visible or not
  await expect(page.getByRole('link', { name: 'Dashboard'})).toBeVisible();

  await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click();

  await page.locator("//a[text()='Add Employee']").click();

  await page.locator("//input[@name='firstName']").fill(employees[emp].firstName);
  await page.locator("//input[@name='lastName']").fill(employees[emp].lastName); 

   //await page.locator('//input[@class="oxd-input oxd-input--active"])[2]').clear()
   await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').clear();
   await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill(employees[emp].employeeId)

  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible();


});
}

