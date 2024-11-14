import { SearchResults } from "../pages/searchResults";
import { test } from "@playwright/test";

export const searchResultsFixture = () =>{
    return test.extend({
        searchResults: async ({ page }, use) => {
            const searchResults = new SearchResults(page);
            await use(searchResults);
        },
    });    
};