import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItemPrice(): Promise<string> {
    return await this.page.locator('.inventory_item_price').textContent() || '';
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}