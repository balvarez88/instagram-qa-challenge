import { Page, Locator, expect } from '@playwright/test';

export class InstagramRegisterPage {
    readonly page: Page;
    readonly emailOrPhone: Locator;
    readonly fullName: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly signUpButton: Locator;
    readonly monthSelect: Locator;
    readonly daySelect: Locator;
    readonly yearSelect: Locator;
    readonly nextButton: Locator;
    readonly confirmationCodeTextbox: Locator;
    readonly confirmationNextButton: Locator;
    readonly confirmationImageIcon: Locator;
    readonly confirmationCodeText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailOrPhone = page.locator('input[name="emailOrPhone"]');
        this.fullName = page.locator('input[name="fullName"]');
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.signUpButton = page.locator('button[type="submit"]');
        this.monthSelect = page.locator('select[title="Month:"]');
        this.daySelect = page.locator('select[title="Day:"]');
        this.yearSelect = page.locator('select[title="Year:"]');
        this.nextButton = page.locator('button:has-text("Next")');
        this.confirmationCodeTextbox = page.getByRole('textbox', { name: 'Confirmation Code' });
        this.confirmationNextButton = page.getByRole('button', { name: 'Next' });
        this.confirmationImageIcon = page.getByRole('img', { name: 'Email confirmation' });
        this.confirmationCodeText = page.getByText('Enter Confirmation Code');
    }

    async goto() {
        await this.page.goto('https://www.instagram.com/accounts/emailsignup/');
    }

    async fillRegistrationForm(email: string, fullName: string, username: string, password: string) {
        await this.emailOrPhone.fill(email);
        await this.fullName.fill(fullName);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signUpButton.click();
    }

    async completeBirthday(day: string, month: string, year: string) {
        await expect(this.page.locator('text=Add Your Birthday')).toBeVisible();
        await this.monthSelect.selectOption(month);
        await this.daySelect.selectOption(day);
        await this.yearSelect.selectOption(year);
        await this.nextButton.click();
    }

    async assertConfirmationCodeScreen() {
        await expect(this.confirmationImageIcon).toBeVisible();
        await expect(this.confirmationCodeText).toBeVisible();
        await expect(this.page.locator('text=Resend Code')).toBeVisible();
        await expect(this.confirmationCodeTextbox).toBeVisible();
    }

    async completeConfirmationCode(code: string) {
        await this.confirmationCodeTextbox.fill(code);
        await this.confirmationNextButton.click();
        //await expect(this.page.locator('text=That code isn\'t valid')).toBeVisible();
    }

}
