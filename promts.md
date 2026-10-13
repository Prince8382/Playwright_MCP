Preview Prompt — OrangeHRM Test Cases
Target URL

https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Objective

Generate Playwright tests for the OrangeHRM application using Playwright MCP. Inspect the actual application and validate every interaction before generating test code.

Test Cases
TC-01: Verify Login Page Loads
Open the OrangeHRM login URL.
Verify that the login page loads successfully.
Verify the Username field, Password field, and Login button.
TC-02: Verify Login with Valid Credentials
Enter username: Admin
Enter password: admin123
Click Login.
Verify that login succeeds and the Dashboard page is displayed.
TC-03: Verify Login with Invalid Username
Enter an invalid username.
Enter an incorrect password.
Click Login.
Verify that the application displays the appropriate error message.
TC-04: Verify Login with Invalid Password
Enter a valid username.
Enter an incorrect password.
Click Login.
Verify that the appropriate error message is displayed.
TC-05: Verify Login with Both Fields Empty
Open the login page.
Leave Username and Password empty.
Click Login.
Verify the application's required-field validation.
TC-06: Verify Login with Empty Username
Leave Username empty.
Enter a password.
Click Login.
Verify the Username field validation.
TC-07: Verify Login with Empty Password
Enter a username.
Leave Password empty.
Click Login.
Verify the Password field validation.
TC-08: Verify Forgot Password Navigation
Open the login page.
Click the Forgot your password? link.
Verify that the password reset page opens.
TC-09: Verify Username Field Input
Open the login page.
Enter text into the Username field.
Verify that the entered value is displayed correctly.
TC-10: Verify Password Field Input
Open the login page.
Enter text into the Password field.
Verify that the password input behaves as expected and masks the entered value.
TC-11: Verify Login Using Keyboard
Enter valid credentials.
Submit the form using the keyboard.
Verify the resulting application state.
TC-12: Verify Login Button State
Open the login page.
Inspect the Login button.
Verify its visibility and enabled or disabled state.
TC-13: Verify Login Error Handling
Submit invalid credentials.
Inspect the resulting error message.
Verify that the message is displayed and the user remains unauthenticated.
TC-14: Verify Password Reset Page
Navigate to the password reset page using the Forgot your password? link.
Inspect the Username field and available action buttons.
Verify the visible page elements and navigation behavior.
TC-15: Verify Successful Logout
Log in using valid credentials.
Inspect the Dashboard and locate the logout action.
Perform logout.
Verify that the application returns to the login page.
Execution Rules
Use Playwright MCP before generating application-specific test code.
Inspect the actual DOM and accessibility information.
Verify every locator against the live application.
Use TypeScript and @playwright/test.
Prefer getByRole(), getByLabel(), getByPlaceholder(), and getByText() when verified.
Use Playwright auto-waiting and web-first assertions.
Avoid hardcoded waits and unstable selectors.
Save tests under tests/[test-name].spec.ts.
Execute the tests using the Playwright test runner.
Investigate failures, fix the underlying issues, and rerun tests.
Do not claim a test passed without execution evidence.
Report any test that could not be validated.
Expected Output
Complete Playwright test code for the validated test cases.
Test file paths.
MCP execution summary.
Verified locator strategies.
Actual test execution results.
Failure analysis and fixes, if applicable.

Important: Test cases describe the intended scenarios. Verify all page elements, error messages, and expected outcomes through MCP before implementing the tests. Do not assume that every scenario behaves as described without inspecting the application.
