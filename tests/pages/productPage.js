import { productPage } from "../locators/amazonLocator";
import fs from 'fs';

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.productName = this.page.locator(productPage.productTitle);
        this.productPrice = this.page.locator(productPage.productPrice);
        this.addToCart = this.page.locator(productPage.addToCart);
        this.proceedToCheckout = this.page.locator(productPage.proceedToCheckout);
    }

    async addToCart() {
        await this.addToCart.click();
    }
    
    async proceedToCheckout() {
        await this.proceedToCheckout.click();
    }
    
    async getProductDetails() {
        const productName = await this.productName.textContent();
        const productPrice = await this.productPrice.textContent();
        return { productName, productPrice };
    
        try {
            fs.writeFileSync('./data/product_data.json', JSON.stringify(productData, null, 2));
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    }
}