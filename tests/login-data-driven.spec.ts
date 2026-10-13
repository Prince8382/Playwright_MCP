import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

interface LoginCase {
  username: string;
  password: string;
  expected: 'Dashboard' | 'Invalid credentials';
}

const loginCases: LoginCase[] = [
  { username: 'Admin', password: 'admin123', expected: 'Dashboard' },
  { username: 'fakeuser', password: 'fakepass', expected: 'Invalid credentials' },
  { username: 'ESSUser1', password: 'ess123', expected: 'Invalid credentials' },
];

test.describe('OrangeHRM data-driven login (TypeScript data)', () => {
  for (const { username, password, expected } of loginCases) {
    test(`${username} login expects ${expected}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();
      await loginPage.login(username, password);

      if (expected === 'Dashboard') {
        await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
        await expect(loginPage.dashboardHeading).toBeVisible();
      } else {
        await expect(loginPage.errorMessage).toContainText(expected);
        await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
      }
    });
  }
});
