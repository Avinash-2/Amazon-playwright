import { HomePage } from "../pages/homePage";
import { test } from "@playwright/test";

export const homePageFixture = () =>{
    return test.extend({
        homePage: async ({ page }, use) => {
            const homePage = new HomePage(page);
            await use(homePage);
        },
    });    
};