import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addFirstItemToCart() {
    const firstItem = this.page.locator('.inventory_item').first();
    await firstItem.locator('button').click();
  }

  async getFirstItemPrice(): Promise<string> {
    return await this.page.locator('.inventory_item_price').first().textContent() || '';
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async assertCartBadgeCount(count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
  }
}