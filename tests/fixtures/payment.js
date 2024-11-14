import { PaymentPage } from "../pages/payment";
import { test } from "@playwright/test";

export const paymentFixture = () =>{
    return test.extend({
        payment: async ({ page }, use) => {
            const payment = new PaymentPage(page);
            await use(payment);
        },
    });    
};