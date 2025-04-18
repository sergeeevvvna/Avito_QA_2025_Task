import { test, expect } from '@playwright/test';

test('Отображение карточек на главной странице', async ({ page }) => {
  await page.goto('https://makarovartem.github.io/frontend-avito-tech-test-assignment/');
  const cards = page.locator('.Card-module__container');
  const count = await cards.count();
  expect(count).toBeGreaterThan(10);
});
