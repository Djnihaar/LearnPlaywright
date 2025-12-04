// import { expect } from "@playwright/test";

// exports.loginPage = class loginPage {
//   constructor(page) {
//     this.page = page;
//     this.usernameInput = page.locator('//input[@name="username"]');
//     this.passwordInput = page.locator('//input[@name="password"]');
//     this.loginButton = page.locator('//button[@type="submit"]');
//     this.loginErrorMeggage = page.locator("//p[@text()='Invalid Credentials']");
//   }
//   async launchURL() {
//     this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
//   }
//   async loginwithCreds(username, password) {
//     await this.usernameInput.fill(username);
//     await this.usernameInput.fill(password);
//     await this.loginButton.click();
//   }
//   async loginSuccess() {
//     await expect(this.page).toHaveURL('https://opensource-demo..com/we/index.php/auth/login')
//   }
//   async loginfailure() {
//     await expect(this.loginErrorMeggage).toBeVisible();
//   }
// }

import { expect } from "@playwright/test";

exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;  // FIXED

    this.usernameInput = page.locator('//input[@name="username"]');
    this.passwordInput = page.locator('//input[@name="password"]');
    this.loginButton = page.locator('//button[@type="submit"]');
    this.loginErrorMessage = page.locator("//p[text()='Invalid credentials']");
    this.logo = page.locator('//img[@alt="company-branding"]');
  }

  async launchURL() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }
  async Logovisible() {
    await expect(this.logo).toBeVisible();
  }

  async loginwithCreds(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password); // FIXED
    await this.loginButton.click();
  }

  async loginSuccess() {
    await expect(this.page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }

  async loginFailure() {
    await expect(this.loginErrorMessage).toBeVisible();
  }
}

