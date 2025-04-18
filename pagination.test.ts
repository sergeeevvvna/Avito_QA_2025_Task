import { test, expect } from '@playwright/test';

test('Переход по страницам с помощью пагинации', async ({ page }) => {
  await page.goto('https://makarovartem.github.io/frontend-avito-tech-test-assignment/');
  const firstCard = await page.locator('.Card-module__container').first().textContent();
  await page.locator('[aria-label="Next page"]').click();
  await page.waitForLoadState('networkidle');
  const newFirstCard = await page.locator('.Card-module__container').first().textContent();
  expect(firstCard).not.toBe(newFirstCard);
});
