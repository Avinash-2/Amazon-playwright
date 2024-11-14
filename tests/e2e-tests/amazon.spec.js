import { mergeTests, expect } from '@playwright/test';
import fs from 'fs';
import { deliveryAddressFixture } from '../fixtures/deliveryAddress';
import { homePageFixture } from '../fixtures/homePage';
import { loginPageFixture } from '../fixtures/loginPage';
import { paymentFixture } from '../fixtures/payment';
import { productPageFixture } from '../fixtures/productPage';
import { searchResultsFixture } from '../fixtures/searchResults';
import { reviewItemsFixture } from '../fixtures/reviewItems';
import { cartPageFixture } from '../fixtures/cartPage';
import { products } from '../data/products.json';
import dotenv from 'dotenv';
dotenv.config();

const test = mergeTests(
    deliveryAddressFixture(),
    homePageFixture(), 
    loginPageFixture(),
    paymentFixture(),
    productPageFixture(),
    searchResultsFixture(),
    reviewItemsFixture(),
    cartPageFixture()
)

const credentials = [
    { email: process.env.USER1_EMAIL, password: process.env.USER1_PASSWORD },
    // { email: process.env.USER2_EMAIL, password: process.env.USER2_PASSWORD }
];

credentials.forEach((cred, credIndex) => {
    products.forEach((product) => {
        product.variants.forEach((variant) => {
            test(`Checkout ${product.name} with ${variant.storage} and ${variant.color} using credential set ${credIndex + 1}`, async ({
                page,
                homePage,
                loginPage,
                searchResults,
                productPage,
                deliveryAddress,
                payment,
                reviewItems
            }) => {

                await page.goto('https://www.amazon.in/');
                await loginPage.login(cred.email, cred.password);

                await homePage.searchProduct(product.name);
                await searchResults.productTitle.click();
                await expect(productPage.productName).toHaveText(product.name);
                await expect(productPage.productPrice).toHaveText(product.price);
                await productPage.addToCart();
                await productPage.proceedToCheckout();
                await expect(deliveryAddress.useThisAddress).toBeVisible(); 

                await deliveryAddress.selectAddress();
                await payment.selectNetBankingPayment('HDFC Bank');
                await expect(await reviewItems.productName).toHaveText(product.name);
                await expect(await productPage.productPrice).toBe(variant.price);
            });
        });
        test.afterEach(async ({ page, cartPage }) => {
            await page.goto('https://www.amazon.in/');
            await cartPage.deleteItemInCart();
        });
    });
});
