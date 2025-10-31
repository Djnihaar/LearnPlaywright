import { test, expect } from '@playwright/test';
import data from "../testdata/redicaccountdata.json"

test('Verify Creating rediff account', async ({ page }) => {

await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

await page.locator("//input[@placeholder='Enter your full name']").fill(data.fullname)
await page.locator("//input[@placeholder='Enter Rediffmail ID']").fill(data.emailid)
await page.locator('#newpasswd').fill(data.password) 
await page.locator('#newpasswd1').fill(data.password)

await page.locator('select.day').selectOption(data.day)
await page.locator('select.middle.month').selectOption(data.month)
await page.locator('select.year').selectOption(data.year)

await page.locator("(//input[@type='radio'])[1]").check()
await page.locator("//label[text()='City']/following-sibling::select").selectOption(data.city)

await page.locator("input[placeholder='Enter recovery email']").fill(data.recoveremail)
await page.locator('#mobno').fill(data.mobilenum)


})