import { LoginPage } from "../pages/loginPage";
import { test } from "@playwright/test";

export const loginPageFixture = () =>{
    return test.extend({
        loginPage: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await use(loginPage);
        },
    });    
};