import { searchResults } from "../locators/amazonLocator";

export class SearchResults {
    constructor(page) {
        this.page = page;
        this.productTitle = this.page.locator(searchResults.productTitle).first();
    }   

    /**
     * Selects a product by its name from the search results.
     * @param {string} productName - The name of the product to select.
     * @returns {Promise<Page>} A promise that resolves to the new tab page object.
     */
    async selectProduct(productName) {
        const [newTab] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.locator(`//span[text()="${productName}"]/parent::a`).click()
        ])
        return newTab;
    }
}