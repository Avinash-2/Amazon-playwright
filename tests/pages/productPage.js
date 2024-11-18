import { productPage } from "../locators/amazonLocator";

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.productName = this.page.locator(productPage.productName);
        this.productPrice = this.page.locator(productPage.productPrice);
        this.addToCartButton = this.page.locator(productPage.addToCart).last();
        this.proceedToCheckoutButton = this.page.locator(productPage.proceedToCheckout);
        this.proceedToCartButton = this.page.locator(productPage.proceedToCart);
    }

    /**
     * Clicks the 'Add to Cart' button on the product page.
     * This action adds the current product to the shopping cart.
     */
    async addToCart() {
        await this.addToCartButton.click();
    }
    
    /**
     * Initiates the checkout process.
     * If the 'Proceed to Checkout' button is not available, clicks the 'Proceed to Cart' button instead.
     */
    async proceedToCheckout() {
        await this.proceedToCheckoutButton.or(this.proceedToCartButton).click();
    }
}