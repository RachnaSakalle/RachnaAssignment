import { test } from '@playwright/test';
import { LoginPage } from'../Pages/LoginPage'
import { users } from '../Utils/TestData';

test.describe('Authentication Tests', () => {

  test('Valid login succeeds', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await page.waitForURL('**/inventory.html');
  });

  test('Invalid login shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    await loginPage.assertLoginError(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});