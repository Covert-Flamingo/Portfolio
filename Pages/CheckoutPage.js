import { expect } from '@playwright/test';

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.confirmation = page.locator('[data-test="complete-header"]');
    }

    async isCheckoutUrl() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    }

    async fillForm(firstName, lastName, zipCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async isOrderComplete() {
        await expect(this.confirmation).toHaveText('Thank you for your order!');
    }
}