import { test, expect } from "@playwright/test";

import {loginPage} from "../pages/loginpage.po"

import {dashBoardPage} from "../pages/dashBoard.po"

import {addEmployeePage} from "../pages/addemployee.po"

import data from "../testdata/PIM/addEmp.json"

import logindata from "../testdata/logindata.json"


let login
let dashboard 
let addemp


test.beforeEach(async ({ page }) => {

    
    login = new loginPage(page)
    dashboard = new dashBoardPage(page)
    addemp = new addEmployeePage(page)

    await login.launchURL()
    await login.Logovisible()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()

})

test(`Verify User can Add Employee`, async ()=> {
    await dashboard.clickonPIM()
    await addemp.navigateToAddEmployee()
    await addemp.createNewEmployee(data.firstname, data.lastname)
    await addemp.empCreationSuccess()


})