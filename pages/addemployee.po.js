import { test, expect } from "@playwright/test";

exports.addEmployeePage = class addEmployeePage {
  constructor(page) {

    this.page = page;
    this.addEmpSubmenu = page.locator("//a[text()='Add Employee']");

    this.firstNameInput = page.locator("input[name='firstName']");
    this.lastNameInput = page.locator("input[name='lastName']");
    this.uploadPhotoBtn = page.locator('//input[@type="file"]');
    this.SaveBtn = page.locator('button[type="submit"]');
    this.EmpDetails = page.locator("//h6[text()='Personal Details']");

  }
  async navigateToAddEmployee() {

    await this.addEmpSubmenu.click();

  }
  async uploadEmpImage() {
    await this.uploadPhotoBtn.setInputFiles('testdata/study.jpg');
  }
  async createNewEmployee(firstname, lastname) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.uploadEmpImage();
    await this.SaveBtn.click();
  }
  async empCreationSuccess() {
    await expect(this.EmpDetails).toBeVisible();
  }
}