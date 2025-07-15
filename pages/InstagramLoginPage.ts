import { Page } from '@playwright/test';

export class InstagramLoginPage {
    constructor(private readonly page: Page) {}

    async goto() {
        await this.page.goto('https://www.instagram.com/accounts/login/');
        await this.page.locator('input[name="username"]').waitFor({ state: 'visible' });
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);

        const loginButton = this.page.locator('button[type="submit"]');
        if (await loginButton.isEnabled()) {
            await loginButton.click();
        }
    }

    async getErrorMessage(): Promise<string | null> {
        const errorLocator = this.page.locator('text=Sorry, your password was incorrect');
        if (await errorLocator.isVisible()) {
            return errorLocator.textContent();
        }
        return null;
    }
    
}
