import { test, expect } from '@playwright/test';
import logindata from "../testdata/logindata.json"  

test('Login with valid credentials', async ({ page }) => {

//Lunching Url    
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//Entering Username
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
 //Entering Password
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
//Click on Login Button
  await page.getByRole('button', { name: 'Login' }).click();

//Verifying Dashboard visible or not
  await expect(page.getByRole('link', { name: 'Dashboard'})).toBeVisible();
//verify current url is dashboard Url
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index") 

  // click on Buzz
  await page.locator("//span[text()='Buzz']").click();


//Verifying Buzz visible or not
  await expect(page.getByRole('link', { name: 'Dashboard'})).toBeVisible();

  // verify the Buzz URL 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');







});