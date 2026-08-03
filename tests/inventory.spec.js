import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { users } from '../Data/users';

test ("Add item to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.Positive.username, users.Positive.password);
    await inventoryPage.isLoaded();
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.goToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
});