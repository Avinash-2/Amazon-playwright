import { paymentPage } from "../locators/amazonLocator";

export class PaymentPage {
    constructor(page) {
        this.page = page;
        this.paymentRadioButton = this.page.locator(paymentPage.paymentRadioButton);
        this.useThisPayment = this.page.locator(paymentPage.submit).nth(4);
        this.addCard = this.page.locator(paymentPage.addCard);
        this.cardNumber = this.page.locator(paymentPage.cardNumber);
        this.cardHolderName = this.page.locator(paymentPage.cardHolderName);
        this.cardExpiryMonth = this.page.locator(paymentPage.cardExpiryMonth);
        this.cardExpiryYear = this.page.locator(paymentPage.cardExpiryYear);
        this.submitCardDetails = this.page.locator(paymentPage.submit).nth(6);
        this.netBankDropdown = this.page.locator(paymentPage.netBankDropdown);
        this.enterUPIId = this.page.getByPlaceholder(paymentPage.enterUPIId);
        this.verifyUPI = this.page.locator(paymentPage.submit).nth(3);
        this.paymentChange = this.page.locator(paymentPage.paymentChange);
    }

    async selectCashPayment() {
        await this.paymentRadioButton.last().click();
        await this.useThisPayment.click();
        await this.paymentChange.waitFor({ state: 'visible' });
    }   

    async selectCardPayment(cardNumber, cardHolderName, cardExpiryMonth, cardExpiryYear) {
        await this.paymentRadioButton.nth(3).click();
        await this.addCard.click();
        await this.cardNumber.fill(cardNumber);
        await this.cardHolderName.fill(cardHolderName);
        await this.cardExpiryMonth.click();
        await this.page.getByText(cardExpiryMonth).click();
        await this.cardExpiryYear.click();
        await this.page.getByText(cardExpiryYear).click();
        await this.submitCardDetails.click();
        await this.useThisPayment.click();
        await this.paymentChange.waitFor({ state: 'visible' });
    }
    async selectNetBankingPayment(bank) {
        await this.paymentRadioButton.nth(4).click();
        await this.netBankDropdown.selectOption(bank);
        await this.useThisPayment.click();
        await this.paymentChange.waitFor({ state: 'visible' });
    }
    async selectUPIPayment(upiId) {
        await this.paymentRadioButton.nth(5).click();
        await this.enterUPIId.fill(upiId);
        await this.paymentChange.waitFor({ state: 'visible' });
        await this.verifyUPI.click();
    }
}   