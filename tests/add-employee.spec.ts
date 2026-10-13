import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PimPage } from '../pages/pim.page';

test.describe('OrangeHRM employee creation', () => {
  test('creates an employee and displays the employee profile', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PimPage(page);

    await loginPage.open();
    await loginPage.login('Admin', 'admin123');

    await pimPage.openModule();
    await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewEmployeeList$/);

    await pimPage.startAddingEmployee();
    await expect(page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();

    const employeeId = String(Date.now()).slice(-10);
    await pimPage.addEmployee('John123', 'Doe456', employeeId);

    await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewPersonalDetails\/empNumber\/\d+$/);
    await expect(page.getByRole('heading', { name: 'John123 Doe456' })).toBeVisible();
  });
});
