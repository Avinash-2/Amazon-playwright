import { ProductPage } from "../pages/productPage";
import { test } from "@playwright/test";

export const productPageFixture = () =>{
    return test.extend({
        productPage: async ({ page }, use) => {
            const productPage = new ProductPage(page);
            await use(productPage);
        },
    });    
};