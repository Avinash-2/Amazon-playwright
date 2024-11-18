import {reviewItems} from "../locators/amazonLocator";

export class ReviewItems {
    constructor(page) {
        this.page = page;
        this.productName = this.page.locator(reviewItems.productDetails).nth(1);
        this.productPrice = this.page.locator(reviewItems.productDetails).nth(2);
    }
}