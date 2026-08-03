import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { users } from '../Data/users';

test("Bugged Login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.Special.username, users.Special.password);
    await inventoryPage.isLoaded();

    const imageSrc = await inventoryPage.getFirstProductImage();
    expect(imageSrc).toContain('sl-404');
});