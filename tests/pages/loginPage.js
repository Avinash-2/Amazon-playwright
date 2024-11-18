import { loginPage } from "../locators/amazonLocator";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.email = this.page.locator(loginPage.email);
        this.continue = this.page.locator(loginPage.continue).first();
        this.password = this.page.locator(loginPage.password);
        this.loginButton = this.page.locator(loginPage.loginButton);
    }

    /**
     * Logs in a user by filling in the email and password fields and submitting the form.
     * @param {string} email - The user's email address.
     * @param {string} password - The user's password.
     */
    async login(email, password) {
        await this.email.waitFor({ state: 'visible' });
        await this.email.fill(email);
        await this.continue.click();
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState();
    }
}