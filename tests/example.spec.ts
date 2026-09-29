import { expect, test } from '@playwright/test';

test('renders a page with Playwright', async ({ page }) => {
  await page.setContent('<h1>Playwright with TypeScript</h1>');
  await expect(page.getByRole('heading', { name: 'Playwright with TypeScript' })).toBeVisible();
});