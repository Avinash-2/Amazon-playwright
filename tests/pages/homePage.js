import { homePage } from "../locators/amazonLocator";

export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = this.page.locator(homePage.searchInput);
        this.searchButton = this.page.locator(homePage.searchButton);
        this.signIn = this.page.locator(homePage.signIn);
    }

    async searchProduct(product) {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }   
}