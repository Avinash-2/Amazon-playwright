import { DeliveryAddress } from "../pages/deliveryAddress";
import { test } from "@playwright/test";

export const deliveryAddressFixture = () =>{
    return test.extend({
        deliveryAddress: async ({ page }, use) => {
            const deliveryAddress = new DeliveryAddress(page);
            await use(deliveryAddress);
        },
    });    
};