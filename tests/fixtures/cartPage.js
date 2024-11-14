import { CartPage } from "../pages/cartPage";
import { test } from "@playwright/test";

export const cartPageFixture = () =>{
    return test.extend({
        cartPage: async ({ page }, use) => {
            const cartPage = new CartPage(page);
            await use(cartPage);
        },
    });    
};