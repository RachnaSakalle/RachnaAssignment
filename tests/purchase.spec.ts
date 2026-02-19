import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { users } from '../Utils/TestData';

test('Happy path purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  const productPrice = await inventory.getFirstItemPrice();

  await inventory.addFirstItemToCart();
  await inventory.assertCartBadgeCount('1');

  await inventory.goToCart();

  const cartPrice = await cart.getCartItemPrice();
  expect(cartPrice).toBe(productPrice);

  await cart.checkout();
  await checkout.fillInformation();
  await checkout.finishCheckout();
  await checkout.assertOrderComplete();
});