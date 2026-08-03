import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { users } from '../Data/users';

test ("Successful Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.Negative.username, users.Negative.password);
    await loginPage.expectError('Epic sadface: Sorry, this user has been locked out.');
});