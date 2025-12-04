import { test, expect } from '@playwright/test';
import swagdata from "../../testdata/swagdata.json"

test('Login with valid cred', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering username
    await page.locator("input[name='user-name']").fill(swagdata.username)
    //entering password
    await page.locator("input[name='password']").fill(swagdata.password)
    //clicking on login button
    await page.locator("input[value='LOGIN']").click()
    //assertions
    //verifying current URL is inventory URL
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
    //verifying products locator is visible or not
    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

});

test('login with valid user name and invalid password', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering username
    await page.locator("input[name='user-name']").fill(swagdata.username)
    //entering invalid password
    await page.locator("input[name='password']").fill(swagdata.invalidpassword)
    //clicking on login button
    await page.locator("input[type='submit']").click()
    //assertions
    //verifying error message display for invalid password and valid user name
   await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
});


test('login with invalid user name and valid password', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering invalid username
    await page.locator("input[name='user-name']").fill(swagdata.invalidusername)
    //entering  password
    await page.locator("input[name='password']").fill(swagdata.password)
    //clicking on login button
    await page.locator("input[type='submit']").click()
    //assertions
    //verifying error message display for valid password and invalid user name
   await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
});

test('login with invalid user name and invalid password', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering invalid username
    await page.locator("input[name='user-name']").fill(swagdata.invalidusername)
    //entering  invalid password
    await page.locator("input[name='password']").fill(swagdata.invalidpassword)
    //clicking on login button
    await page.locator("input[type='submit']").click()
    //assertions
    //verifying error message display for valid password and invalid user name
   await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
});

test('login without entering credentials', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //clicking on login button
    await page.locator("//input[@type='submit']").click()
    //assertion
    //verifying error message display for required fields
    await expect(page.locator("//h3[contains(.,'Epic sadface: Username is required')]")).toBeVisible()
    
});

test('login without lockedout user and valid password', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering lockedout username
    await page.locator("input[name='user-name']").fill(swagdata.lockedun)
    //entering password
    await page.locator("input[name='password']").fill(swagdata.password)
    //clicking on login button
    await page.locator("input[type='submit']").click()
    //assertion
    //verifying error message display for required fields
    await expect(page.locator("//h3[contains(.,'Epic sadface: Sorry, this user has been locked out.')]")).toBeVisible()
});

test('login without problem user and valid password', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering lockedout username
    await page.locator("input[name='user-name']").fill(swagdata.problemun) 
    //entering password
    await page.locator("input[name='password']").fill(swagdata.password)
    //clicking on login button
    await page.locator("input[type='submit']").click()
    //assertion
    //verifying error message display for required fields
    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()
});

test('login without performance glitch user and valid password', async ({ page }) => {

    //actions
    //lunching URL
    await page.goto("https://www.saucedemo.com/v1/")
    //entering performance.. username
    await page.locator("input[name='user-name']").fill(swagdata.performanceun)
    //entering password
    await page.locator("input[name='password']").fill(swagdata.password)
    //clicking on login button
    await page.locator("input[type='submit']").click()
    //assertion
    //verifying current URL is inventory URL
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
    //veryfying products locator is visible or not
    await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()
});