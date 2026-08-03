import { expect } from '@playwright/test';
export class InventoryPage {
    constructor(page){;
    this.page = page;

    this.inventoryContainer = page.locator('[data-test="inventory-container"]')
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]')
    this.inventoryItem = page.locator('[data-test="inventory-item-name"]')
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').first();
    }

    async isLoaded(){
        await expect(this.inventoryContainer).toBeVisible();
    }
    async addFirstProductToCart(){
        await this.addToCartButton.click();
    }
    async goToCart(){
        await this.shoppingCart.click();
    }
    async getCartCount(){
        return await this.cartBadge.textContent();
    }
    async getFirstProductImage() {
    return await this.page.locator('[data-test=inventory-item-sauce-labs-backpack-img]').first().getAttribute('src');
    }
}