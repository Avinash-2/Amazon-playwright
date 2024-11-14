import { cartPage, homePage } from "../locators/amazonLocator";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.navigateToCart = this.page.locator(homePage.navigateToCart);
        this.delete = this.page.locator(cartPage.delete);
    }

    async deleteItemInCart() {
        await this.navigateToCart.click();
        await this.delete.click();
    }
}