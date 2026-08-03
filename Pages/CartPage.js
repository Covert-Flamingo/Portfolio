import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        this.cartCount = page.locator('[data-test="shopping-cart-badge"]');
        this.cartItem = page.locator('[data-test="inventory-item-name"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async isCartUrl() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    }

    async isItemInCart(expectedCount) {
        await expect(this.cartCount).toHaveText(expectedCount);
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}