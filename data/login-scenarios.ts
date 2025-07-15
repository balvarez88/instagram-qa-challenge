/**
 * These credentials are fake and provided solely for illustrative purposes within these test scenarios.
 * To perform a real login validation, this test should be executed with a valid Instagram account.
 */

export const loginScenarios = [
    {
        name: 'TC10 :: Empty fields',
        username: '',
        password: '',
        expectError: false,
        expectStayOnPage: true,
        expectButtonDisabled: true,
        expectSuccessfulLogin: false,
        description: 'Login with empty username or password should keep button disabled'
    },
    {
        name: 'TC07 :: Invalid username',
        username: 'john.doe',
        password: 'validPassword.25',
        expectError: true,
        expectStayOnPage: true,
        expectButtonDisabled: false,
        expectSuccessfulLogin: false,
        description: 'Invalid username should show error for invalid credentials'
    },
    {
        name: 'TC08 :: Valid username with wrong password',
        username: 'john_doe',
        password: 'wrongPassword.25',
        expectError: true,
        expectStayOnPage: true,
        expectButtonDisabled: false,
        expectSuccessfulLogin: false,
        description: 'Wrong password should show error for invalid credentials'
    },
    {
        name: 'TC06 :: Successful login with valid credentials',
        username: 'test.user.25',
        password: 'P4s*.1D3',
        expectError: false,
        expectStayOnPage: false,
        expectButtonDisabled: false,
        expectSuccessfulLogin: true,
        description: 'Correct credentials should allow successful login'
    }
];
