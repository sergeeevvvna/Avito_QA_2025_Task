import { test, expect } from '@playwright/test';

test('Открытие карточки игры', async ({ page }) => {
  await page.goto('https://makarovartem.github.io/frontend-avito-tech-test-assignment/');
  await page.locator('.Card-module__container').first().click();
  await expect(page.locator('h1')).toBeVisible();
  await expect(page).toHaveURL(/\/game\//);
});
