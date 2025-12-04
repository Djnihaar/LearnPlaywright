import { test, expect } from "@playwright/test";

exports.dashBoardPage  = class dashBoardPage {
  constructor(page) {
    this.page = page
    this.PIMMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
    this.BuzzMenu = page.locator('//a[@href="/web/index.php/buzz/viewBuzzModule"]')


  }
  async clickonPIM() {
     this.PIMMenu.click();
  }

    async clickonBuzz() {
     this.BuzzMenu.click();
  }
}