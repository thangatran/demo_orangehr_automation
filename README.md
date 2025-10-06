# Demo OrangeHR Automation

UI test suites for Login and Dashboard Search for OrangeHR using [Playwright](https://playwright.dev/).

## Getting Started

1. **Install dependencies:**
  ```sh
  npm install
  ```

2. **Install Playwright browsers:**
  ```sh
  npx playwright install
  ```

3. **Install Playwright Test for VS Code extension:**
  - In Visual Studio Code, go to Extensions (`Cmd+Shift+X`)
  - Search for `Playwright Test for VSCode` and install it

4. **Run tests:**
  - All tests in all browsers (Chromium/Firefox/Webkit):
    ```sh
    npx playwright test
    ```
  - Chromium/Firefox/Webkit only:
    ```sh
    npx playwright test --project=chromium
    ```
    ```sh
    npx playwright test --project=firefox
    ```
    ```sh
    npx playwright test --project=webkit
    ```
  - Tests by tag name (currently has 2 tags for 2 test suites: @login, @search):
    ```sh
    npx playwright test --project=chromium --grep @login
    ```
    ```sh
    npx playwright test --project=chromium --grep @search
    ```
  - Debug mode:
    ```sh
    npx playwright test --project=chromium --debug
    ```

6. **View HTML test report:**
  ```sh
  npx playwright show-report
  ```

## Test Details

- Tests following Page Object Model design. All pages are defined in `pages/` (`LoginPage`, `DashboardPage`).
- Test specs are in `tests/` (`login.spec.ts`, `dashboardsearch.spec.ts`).
- Test data is managed in `test-data/` (`login.data.ts`, `searchdashboard.data.ts`). Some tests are designed in Data-driven testing, using test-data to make different testcases.
- Implicit wait timeout is 10seconds, with default headless mode, tests run in parallel. Also screenshot will be taken on failed tests and showed on test report.
- Step decorator is to enhance test readability in the report.   