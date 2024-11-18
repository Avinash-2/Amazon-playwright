const amazon = {
    loginPage: {
        email: '#ap_email',
        continue: '#continue',
        password: '#ap_password',
        loginButton: '#signInSubmit'
    },
    homePage: {
        searchInput: '#twotabsearchtextbox',
        searchButton: '#nav-search-submit-button',
        navigateToCart: '#nav-cart-count-container'
    },
    searchResults: {
        productTitle: '[data-cy="title-recipe"]>h2 span'
    },
    productPage: {
        productName: '#productTitle',
        productPrice: '#corePriceDisplay_desktop_feature_div>div:nth-child(2)>span:first-child',
        addToCart: '#add-to-cart-button',
        proceedToCheckout: '[data-feature-id="proceed-to-checkout-action"]',
        proceedToCart: '#attach-sidesheet-checkout-button [type="submit"]'
    },
    deliveryAddress: {
        firstAddress: '[data-action="select-address-in-list"]',
        useThisAddress: '#shipToThisAddressButton',
        changeAddress: '#addressChangeLinkId',
    },
    paymentPage: {
        paymentRadioButton: '[type="radio"]',
        submit: '[type="submit"]',
        addCard: '[data-action*="add-credit-card"]',
        cardNumber: '#addCreditCardNumber',
        cardHolderName: '#ppw-accountHolderName',
        cardExpiryMonth: '[data-a-class*="expiry-month"]',
        cardExpiryYear: '[data-a-class*="expiry-year"]',
        submitCardDetails: '[type="submit"]',
        netBankDropdown: '[name*="bankSelection"]',
        enterUPIId: 'Enter UPI ID',
        verifyUPI: '[type="submit"]',
        paymentChange: '#payChangeButtonId'
    },
    reviewItems: {
        productDetails: '[class*="bold"][data-testid]'
    }
}

export const {
    loginPage,
    homePage,
    searchResults,
    productPage,
    deliveryAddress,
    paymentPage,
    reviewItems,
} = amazon;