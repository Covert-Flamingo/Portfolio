import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { users } from '../Data/users';

test ("Complete purchase flow", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(users.Positive.username, users.Positive.password);

    await inventoryPage.isLoaded();
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.goToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await cartPage.isCartUrl();
    await cartPage.isItemInCart('1');
    await cartPage.clickCheckout();

    await checkoutPage.isCheckoutUrl();
    await checkoutPage.fillForm(
        users.Positive.firstName,
        users.Positive.lastName,
        users.Positive.zipCode);
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
    await checkoutPage.isOrderComplete();
});