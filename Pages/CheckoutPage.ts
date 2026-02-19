import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation() {
    await this.page.fill('[data-test="firstName"]', 'Test');
    await this.page.fill('[data-test="lastName"]', 'User');
    await this.page.fill('[data-test="postalCode"]', '12345');
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }

  async assertOrderComplete() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}