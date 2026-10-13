import { type Locator, type Page } from '@playwright/test';

export class PimPage {
  private readonly pimLink: Locator;
  private readonly addEmployeeButton: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly employeeIdInput: Locator;
  private readonly saveButton: Locator;

  constructor(private readonly page: Page) {
    this.pimLink = page.getByRole('link', { name: 'PIM', exact: true });
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeIdInput = page
      .locator('.oxd-input-group')
      .filter({ has: page.getByText('Employee Id', { exact: true }) })
      .getByRole('textbox');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async openModule(): Promise<void> {
    await this.pimLink.click();
  }

  async startAddingEmployee(): Promise<void> {
    await this.addEmployeeButton.click();
  }

  async addEmployee(firstName: string, lastName: string, employeeId: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.employeeIdInput.fill(employeeId);
    await this.saveButton.click();
  }
}
