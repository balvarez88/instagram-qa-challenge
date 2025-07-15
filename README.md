# Instagram QA Challenge
This project contains a basic test suite to automate key Instagram functionalities using **Playwright** with **TypeScript**.  
The focus is to demonstrate data-driven testing and good practices.

## Technologies
- Node.js `v22.17.0`
- NPM `v10.9.2`
- Playwright
- TypeScript

## How to clone and set up the project
```bash
# Clone the repository
git clone git@github.com:balvarez88/instagram-qa-challenge.git

# Navigate into the project directory
cd instagram-qa-challenge

# Install project dependencies
npm install

# Install Playwright browsers (Chromium, Firefox, WebKit)
npx playwright install
```

## Project Structure
```plaintext
instagram-qa-challenge/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── data/
│   └── login-scenarios.ts
├── pages/
│   ├── InstagramLoginPage.ts
│   └── InstagramRegisterPage.ts
├── tests/
│   ├── instagram-login.spec.ts
│   └── instagram-register.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## How to Run the Tests

### Run all tests (headless mode, default):
```bash
npx playwright test
```

### Run tests in headed mode (with browser UI and debug enabled):
```bash
npx playwright test --headed --debug
```

### View the latest HTML report:
```bash
npx playwright show-report
```
> The report will open automatically at http://localhost:9323. Press `Ctrl + C` to stop the server when finished.

## Scenarios covered
| ID    | Scenario                                  | Expected Result                                            |
|-------|-------------------------------------------|------------------------------------------------------------|
| TC10  | Login with empty fields                   | Should block submission / validate fields                  |
| TC07  | Login with invalid username               | Should display error message                               |
| TC08  | Login with invalid password               | Should display error message                               |
| TC06  | Successful login (happy path)             | Should allow access (only in safe environments)            |
| TC01  | Successful user registration (happy path) | Should display confirmation code screen after registration |

## Notes
Some flows like successful login or registration confirmation may require valid credentials and real confirmation codes to fully complete.

## License
This project is licensed under the [MIT License](./LICENSE).

It is provided for demonstration and educational purposes only.
It is not affiliated with or endorsed by Instagram / Meta.
