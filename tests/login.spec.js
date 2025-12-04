import { test, expect } from '@playwright/test';
import { loginPage } from "../pages/loginpage.po";
import logindata from "../testdata/logindata.json"


let login
 
test.beforeEach(async ({ page }) => {

    
    login = new loginPage(page)
    await login.launchURL()
    await login.Logovisible()

})

test(`Login with valid credentials`, async ()=> {
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.loginSuccess()
})


test(`Login with valid username and Invalid password`, async ()=> {
    await login.loginwithCreds(logindata.username, logindata.wrongpassword)
    await login.loginFailure()
})

test(`Login with Invalid username and valid password`, async ()=> {
    await login.loginwithCreds(logindata.wrongusername, logindata.password)
    await login.loginFailure()
})
test(`Login with Invalid username and Invalid password`, async ()=> {
    await login.loginwithCreds(logindata.wrongusername, logindata.wrongpassword)
    await login.loginFailure()
})