import { test, expect } from '@playwright/test';

test.describe('OrangeHRM logout', () => {
  test('logs out and returns to the login page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    await page
      .getByRole('banner')
      .getByRole('img', { name: 'profile picture' })
      .click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });
});
