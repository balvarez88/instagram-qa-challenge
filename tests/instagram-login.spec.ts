import { test, expect } from '@playwright/test';
import { InstagramLoginPage } from '../pages/InstagramLoginPage';
import { loginScenarios } from '../data/login-scenarios';

test.describe('Instagram Login Scenarios', () => {
    // Iterate through all login scenarios defined in the test data
    for (const scenario of loginScenarios) {
        
        // Define a test dynamically for each scenario
        test(`Login test: ${scenario.name}`, async ({ page }) => {
            const loginPage = new InstagramLoginPage(page);

            await loginPage.goto();
            await loginPage.login(scenario.username, scenario.password);
            await page.waitForTimeout(3500); // Waiting 3.5s for result loading

            // Validate expected error message for invalid credentials
            if (scenario.expectError) {
                const error = await loginPage.getErrorMessage();
                await expect(error, `Expected error message for: ${scenario.name}`).toContain('Sorry, your password was incorrect');
            }

            // Validate user remains on login page if login fails
            if (scenario.expectStayOnPage) {
                await expect(page, `Expected to remain on login for: ${scenario.name}`).toHaveURL(/accounts\/login/);
            }

            // Validate login button remains disabled for invalid inputs
            if (scenario.expectButtonDisabled) {
                await expect(page.locator('button[type="submit"]'), `Expected login button disabled for: ${scenario.name}`).toBeDisabled();
            }

            // Validate successful login redirects to home page and user-specific elements are visible
            if (scenario.expectSuccessfulLogin) {        
                await expect(page, `Expected successful login redirect for: ${scenario.name}`).not.toHaveURL(/accounts\/login/);
                await expect(page.locator('[aria-label="Home"]'), `Expected Home icon to be visible after login for: ${scenario.name}`).toBeVisible();
            }
        });
    }
});
