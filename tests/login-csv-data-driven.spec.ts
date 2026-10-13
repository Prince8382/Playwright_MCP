import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'csv-parse/sync';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

interface CsvLoginCase {
  Username: string;
  Password: string;
  Expected: 'Dashboard' | 'Invalid credentials';
}

const csvPath = resolve(__dirname, '../test-data/loginData.csv');
const loginCases = parse(readFileSync(csvPath, 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
  trim: true,
}) as CsvLoginCase[];

test.describe('OrangeHRM data-driven login (CSV data)', () => {
  for (const { Username, Password, Expected } of loginCases) {
    test(`${Username} login expects ${Expected}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();
      await loginPage.login(Username, Password);

      if (Expected === 'Dashboard') {
        await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
        await expect(loginPage.dashboardHeading).toBeVisible();
      } else {
        await expect(loginPage.errorMessage).toContainText(Expected);
        await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
      }
    });
  }
});
