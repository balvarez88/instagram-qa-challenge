import { test } from '@playwright/test';
import { InstagramRegisterPage } from '../pages/InstagramRegisterPage';

test('Sign Up test: TC01 :: Successfully register a new user', async ({ page }) => {
    // Initialize the Register Page Object
    const registerPage = new InstagramRegisterPage(page);

    // Navigate to the Instagram registration page
    await registerPage.goto();

    // Fill out the registration form with static/fake user data
    await registerPage.fillRegistrationForm(
        `bris.doe@mail.tm`,
        'Bris Doe',
        `bris_doe`,
        'newPassword.25'
    );

    // Select valid birthday information
    await registerPage.completeBirthday('2', '5', '1988');

    // Assert that the confirmation code screen is correctly rendered
    await registerPage.assertConfirmationCodeScreen();

    // Attempt to enter a 6-digit confirmation code and continue
    await registerPage.completeConfirmationCode('123456');
});
