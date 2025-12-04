const { test, expect } = require('@playwright/test');

test.describe('OrangeHRM Claim Submission Flow', () => {
  
  test('Submit a new claim and verify creation', async ({ page }) => {
    
    // Test configuration
    const baseURL = 'https://opensource-demo.orangehrmlive.com';
    const credentials = {
      username: 'Admin',
      password: 'admin123'
    };
    const claimData = {
      event: 'Accommodation',
      currency: 'United States Dollar',
      remarks: 'This is a test claim for accommodation expenses during business trip.'
    };

    // Step 1: Navigate to login page
    console.log('Step 1: Navigating to OrangeHRM login page...');
    await page.goto(`${baseURL}/web/index.php/auth/login`);
    await expect(page).toHaveTitle(/OrangeHRM/);
    
    // Step 2: Login as Admin
    console.log('Step 2: Logging in as Admin...');
    await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Wait for dashboard to load
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    console.log('✓ Login successful');

    // Step 3: Navigate to Claim module
    console.log('Step 3: Navigating to Claim module...');
    await page.getByRole('link', { name: 'Claim' }).click();
    await expect(page).toHaveURL(/.*claim/);
    await expect(page.getByRole('heading', { name: 'Claim', level: 6 })).toBeVisible();
    console.log('✓ Claim module opened');

    // Step 4: Click on Submit Claim
    console.log('Step 4: Clicking Submit Claim...');
    await page.getByRole('link', { name: 'Submit Claim' }).click();
    await expect(page.getByRole('heading', { name: 'Create Claim Request' })).toBeVisible();
    console.log('✓ Submit Claim form opened');

    // Step 5: Select Event
    console.log(`Step 5: Selecting Event: ${claimData.event}...`);
    // Click the Event dropdown
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).first().click();
    // Select the event option
    await page.getByRole('option', { name: claimData.event }).click();
    console.log(`✓ Event "${claimData.event}" selected`);

    // Step 6: Select Currency
    console.log(`Step 6: Selecting Currency: ${claimData.currency}...`);
    // Click the Currency dropdown
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).first().click();
    // Select the currency option
    await page.getByRole('option', { name: claimData.currency }).click();
    console.log(`✓ Currency "${claimData.currency}" selected`);

    // Step 7: Fill Remarks
    console.log('Step 7: Filling remarks...');
    await page.locator('textarea').fill(claimData.remarks);
    console.log('✓ Remarks filled');

    // Step 8: Click Create button
    console.log('Step 8: Submitting claim...');
    await page.getByRole('button', { name: 'Create' }).click();
    
    // Wait for success message
    await expect(page.getByText('Successfully Saved')).toBeVisible({ timeout: 10000 });
    console.log('✓ Claim created successfully');

    // Extract the Reference ID from the URL
    const currentURL = page.url();
    const referenceIdMatch = currentURL.match(/\/id\/(\d+)/);
    const referenceId = referenceIdMatch ? referenceIdMatch[1] : null;
    console.log(`✓ Claim Reference ID: ${referenceId}`);

    // Step 9: Verify claim details on the detail page
    console.log('Step 9: Verifying claim details...');
    await expect(page.getByText('Reference Id')).toBeVisible();
    await expect(page.locator('input[value="Accommodation"]')).toBeVisible();
    await expect(page.locator('input[value="United States Dollar"]')).toBeVisible();
    await expect(page.locator('textarea').filter({ hasText: claimData.remarks })).toBeVisible();
    await expect(page.getByText('Initiated')).toBeVisible();
    console.log('✓ Claim details verified on detail page');

    // Step 10: Navigate to My Claims to verify in list
    console.log('Step 10: Navigating to My Claims list...');
    await page.getByRole('link', { name: 'My Claims' }).click();
    await expect(page.getByRole('heading', { name: 'My Claims', level: 5 })).toBeVisible();
    console.log('✓ My Claims page opened');

    // Step 11: Verify the newly created claim appears in the list
    console.log('Step 11: Verifying claim in My Claims list...');
    
    // Get all rows from the table
    const tableRows = page.locator('table tbody tr');
    const rowCount = await tableRows.count();
    console.log(`Found ${rowCount} claims in the list`);

    // Find the row with our claim (should be the first one)
    const firstRow = tableRows.first();
    
    // Verify claim details in the list
    await expect(firstRow.locator('td').nth(1)).toContainText('Accommodation');
    await expect(firstRow.locator('td').nth(3)).toContainText('United States Dollar');
    await expect(firstRow.locator('td').nth(5)).toContainText('Initiated');
    
    console.log('✓ Claim verified in My Claims list');
    console.log('\n=== TEST COMPLETED SUCCESSFULLY ===');
    console.log('Summary:');
    console.log(`- Event: ${claimData.event}`);
    console.log(`- Currency: ${claimData.currency}`);
    console.log(`- Status: Initiated`);
    console.log(`- Remarks: ${claimData.remarks}`);
  });

  test('Submit claim with different event type', async ({ page }) => {
    
    const baseURL = 'https://opensource-demo.orangehrmlive.com';
    const claimData = {
      event: 'Travel Allowance',
      currency: 'Euro',
      remarks: 'Travel expenses for client meeting in Europe.'
    };

    // Login
    await page.goto(`${baseURL}/web/index.php/auth/login`);
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/.*dashboard/);

    // Navigate to Claim and Submit
    await page.getByRole('link', { name: 'Claim' }).click();
    await page.getByRole('link', { name: 'Submit Claim' }).click();

    // Fill claim form
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).first().click();
    await page.getByRole('option', { name: claimData.event }).click();
    
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).first().click();
    await page.getByRole('option', { name: claimData.currency }).click();
    
    await page.locator('textarea').fill(claimData.remarks);
    await page.getByRole('button', { name: 'Create' }).click();

    // Verify
    await expect(page.getByText('Successfully Saved')).toBeVisible({ timeout: 10000 });
    console.log(`✓ ${claimData.event} claim created successfully`);
  });
});

// Additional helper test for negative scenarios
test.describe('OrangeHRM Claim Validation Tests', () => {
  
  test('Verify required field validation', async ({ page }) => {
    
    const baseURL = 'https://opensource-demo.orangehrmlive.com';

    // Login
    await page.goto(`${baseURL}/web/index.php/auth/login`);
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/.*dashboard/);

    // Navigate to Submit Claim
    await page.getByRole('link', { name: 'Claim' }).click();
    await page.getByRole('link', { name: 'Submit Claim' }).click();

    // Try to submit without filling required fields
    await page.getByRole('button', { name: 'Create' }).click();

    // Verify validation messages appear
    await expect(page.getByText('Required')).toBeVisible();
    console.log('✓ Required field validation working correctly');
  });
});