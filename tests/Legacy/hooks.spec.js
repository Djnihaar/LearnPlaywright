const { test, expect } = require('@playwright/test');


test.afterEach(async ({ page }) => {
    console.log("After Each test");
});

test.beforeEach(async ({ page }) => {
    console.log("Before Each test");
});

test.beforeAll(async () => {
    console.log("Before All - Only one time");
});
test.afterAll(async () => {
    console.log("After All - Only one time");
});

test("test case 1", ()=> {

    console.log("test case 1")
})

test("test case 2", ()=> {

    console.log("test case 2")
})

test("test case 3", ()=> {

    console.log("test case 3")
})
test("test case 4", ()=> {

    console.log("test case 4")
})