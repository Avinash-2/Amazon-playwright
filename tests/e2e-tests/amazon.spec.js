import { test, expect } from '@playwright/test';
import { products } from '../data/products.json';
import { ProductPage } from "../pages/productPage";
import { DeliveryAddress } from '../pages/deliveryAddress';
import { PaymentPage } from '../pages/payment';
import { ReviewItems } from '../pages/reviewItems';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { SearchResults } from '../pages/searchResults';
import dotenv from 'dotenv';
dotenv.config();

const credentials = [
    { email: process.env.USER1_EMAIL, password: process.env.USER1_PASSWORD },
    { email: process.env.USER2_EMAIL, password: process.env.USER2_PASSWORD }
];

test.afterEach('logout', async({page})=>{
    await expect(page.locator("#addressChangeLinkId")).toBeVisible({timeout:3000});
})
test('Navigate to amazon', async({page})=>{
    await page.goto('https://www.amazon.in/');
    // await expect(page.locator("#twotabsearchtextbox")).toBeVisible();
})

// credentials.forEach((cred, credIndex) => {
//     products.forEach((product) => {
//         product.variants.forEach((variant) => {
//             test(`Checkout ${product.name} with ${variant.storage} and ${variant.color} using credential set ${credIndex + 1}`, async ({
//                 page
//             }) => {
//                 const homePage = new HomePage(page);
//                 const searchResults = new SearchResults(page);

//                 const productName = `${product.name} (${variant.storage}) - ${variant.color}`;
//                 await page.goto('https://www.amazon.in/');
//                 await homePage.searchProduct(productName);
//                 const newPage = await searchResults.selectProduct(productName);

//                 const productPage = new ProductPage(newPage);
//                 const deliveryAddress = new DeliveryAddress(newPage);
//                 const payment = new PaymentPage(newPage);
//                 const reviewItems = new ReviewItems(newPage);
//                 const loginPage = new LoginPage(newPage);

//                 await expect(productPage.productName).toContainText(productName);
//                 await productPage.addToCart();
//                 await productPage.proceedToCheckout();
//                 await loginPage.login(cred.email, cred.password);
//                 await expect(deliveryAddress.useThisAddress).toBeVisible(); 

//                 await deliveryAddress.selectAddress();
//                 await payment.selectNetBankingPayment(process.env.BANK_NAME);
//                 await expect(await reviewItems.productName).toContainText(productName);
//                 await expect(await reviewItems.productPrice).toContainText(variant.price);
//             });
//         });
//     });
// });
