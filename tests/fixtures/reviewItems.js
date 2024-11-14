import { ReviewItems } from "../pages/reviewItems";
import { test } from "@playwright/test";

export const reviewItemsFixture = () =>{
    return test.extend({
        reviewItems: async ({ page }, use) => {
            const reviewItems = new ReviewItems(page);
            await use(reviewItems);
        },
    });    
};