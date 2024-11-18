import { homePage } from "../locators/amazonLocator";

export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = this.page.locator(homePage.searchInput);
        this.searchButton = this.page.locator(homePage.searchButton);
    }

    /**
     * Searches for a product using the search input field and triggers the search action.
     * @param {string} product - The name of the product to search for.
     */
    async searchProduct(product) {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }   
}