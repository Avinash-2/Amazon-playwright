import { homePage, loginPage } from "../locators/amazonLocator";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.email = this.page.locator(loginPage.email);
        this.continue = this.page.locator(loginPage.continue);
        this.password = this.page.locator(loginPage.password);
        this.loginButton = this.page.locator(loginPage.loginButton);
        this.signIn = this.page.locator(homePage.signIn);
    }

    async login(email, password) {
        await this.signIn.click();
        await this.email.waitFor({ state: 'visible' });
        await this.email.fill(email);
        await this.continue.click();
        await this.password.fill(password);
        await this.loginButton.click();
    }
}