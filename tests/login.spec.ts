import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { loginData } from '../test-data/login.data';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('Demo OrangeHr Login', {tag: '@login'} , () => {

    loginData.validCredentials.forEach (({ userName, password }) => {
        test(`User can login with valid credentials ${userName} ${password}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const dashboardPage = new DashboardPage(page);
            await loginPage.goTo();
            await loginPage.login(userName, password);
            await dashboardPage.shouldBeDisplayed();
        });
    });

    loginData.invalidCredentials.forEach (({ userName, password }) => {
        test(`User can see error when login with invalid credentials ${userName} ${password}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goTo();
            await loginPage.login(userName, password);
            await loginPage.shouldDisplayError('Invalid credentials');
        });
    });

    test('UserName and Password are mandatory fields', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.clickLogin();
        await loginPage.shouldDisplayRequiredForUserName();
        await loginPage.shouldDisplayRequiredForPassword();
        await loginPage.enterUserName('abc');
        await loginPage.clickLogin();
        await loginPage.shouldDisplayError('Required');
        await loginPage.clearUserName();
        await loginPage.enterPassword('abc');
        await loginPage.clickLogin();
        await loginPage.shouldDisplayError('Required');
        await loginPage.enterUserName('   ');
        await loginPage.clickLogin();
        await loginPage.shouldDisplayError('Required');
    });
});