import { deliveryAddress } from "../locators/amazonLocator";

export class DeliveryAddress {
    constructor(page) {
        this.page = page;
        this.firstAddress = this.page.locator(deliveryAddress.firstAddress);
        this.useThisAddress = this.page.getByTestId(deliveryAddress.useThisAddress);
        this.addNewAddress = this.page.locator(deliveryAddress.addNewAddress);
        this.countryDropdown = this.page.locator(deliveryAddress.country);
        this.fullName = this.page.locator(deliveryAddress.fullName);
        this.phoneNumber = this.page.locator(deliveryAddress.phoneNumber);
        this.pinCode = this.page.locator(deliveryAddress.pinCode);
        this.addressLineOne = this.page.locator(deliveryAddress.addressLineOne);
        this.addressLineTwo = this.page.locator(deliveryAddress.addressLineTwo);
        this.landmark = this.page.locator(deliveryAddress.landmark);
        this.city = this.page.locator(deliveryAddress.city);
        this.stateDropdown = this.page.locator(deliveryAddress.state);
        this.submitAddress = this.page.locator(deliveryAddress.submitAddress);
        this.changeAddress = this.page.locator(deliveryAddress.changeAddress);
    }   

    async selectAddress() {
        await this.firstAddress.click();
        await this.useThisAddress.click();
        await this.changeAddress.waitFor({ state: 'visible' });
    }

    async addNewAddress({country, fullName, phoneNumber, pinCode, addressLineOne, addressLineTwo, landmark, city, state}) {
        await this.addNewAddress.click();
        await this.countryDropdown.click();
        await this.page.getByText(country).click();
        await this.fullName.fill(fullName);
        await this.phoneNumber.fill(phoneNumber);
        await this.pinCode.fill(pinCode);
        await this.addressLineOne.fill(addressLineOne);
        await this.addressLineTwo.fill(addressLineTwo);
        await this.landmark.fill(landmark);
        await this.city.fill(city);
        await this.stateDropdown.click();
        await this.page.getByText(country).click();
        await this.submitAddress.click();
    }
}