import { searchResults } from "../locators/amazonLocator";

export class SearchResults {
    constructor(page) {
        this.page = page;
        this.productTitle = this.page.locator(searchResults.productTitle).first();
    }   
}