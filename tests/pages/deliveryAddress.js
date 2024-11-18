import { deliveryAddress } from "../locators/amazonLocator";

export class DeliveryAddress {
    constructor(page) {
        this.page = page;
        this.firstAddress = this.page.locator(deliveryAddress.firstAddress).first();
        this.useThisAddress = this.page.locator(deliveryAddress.useThisAddress);
        this.changeAddress = this.page.locator(deliveryAddress.changeAddress);
    }   

    /**
     * Selects the first available delivery address and confirms its usage.
     * Waits for the address change confirmation to become visible.
     */
    async selectAddress() {
        await this.firstAddress.click();
        await this.useThisAddress.click();
        await this.changeAddress.waitFor({ state: 'visible' });
    }
}