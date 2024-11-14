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
        signIn: '#nav-link-accountList',
        navigateToCart: '#nav-cart-count-container'
    },
    searchResults: {
        productTitle: '[data-cy="title-recipe"]>h2 span'
    },
    productPage: {
        productName: '#productTitle',
        productPrice: '#corePriceDisplay_desktop_feature_div>div:nth-child(2)>span:first-child',
        addToCart: '#add-to-cart-button',
        proceedToCheckout: '#attach-sidesheet-checkout-button-announce'
    },
    deliveryAddress: {
        firstAddress: '[data-action="select-address-in-list"]',
        useThisAddress: 'Address_selectShipToThisAddress',
        changeAddress: '#addressChangeLinkId',
        addNewAddress: '#add-new-address-popover-link',
        country: '#address-ui-widgets-countryCode',
        fullName: '#address-ui-widgets-enterAddressFullName',
        phoneNumber: '#address-ui-widgets-enterAddressPhoneNumber',
        pinCode: '#address-ui-widgets-enterAddressPostalCode',
        addressLineOne: '#address-ui-widgets-enterAddressLine1',
        addressLineTwo: '#address-ui-widgets-enterAddressLine2',
        landmark: '#address-ui-widgets-landmark',
        city: '#address-ui-widgets-enterAddressCity',
        state: '#address-ui-widgets-enterAddressStateOrRegion',
        submitAddress: '#address-ui-widgets-form-submit-button-announce'
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
    },
    cartPage: {
        delete: '[data-feature-id="item-delete-button"]'
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
    cartPage
} = amazon;