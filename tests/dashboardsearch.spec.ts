import test from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { loginData } from "../test-data/login.data";
import { DashboardPage } from "../pages/dashboard.page";
import { searchData } from "../test-data/searchdashboard.data";

test.describe('Demo OrangeHr Search in Dashboard', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(loginData.validCredentials[0].userName, loginData.validCredentials[0].password);      
    });

    searchData.forEach (({ searchText, expectedCount }) => {
        test(`User searches for ${searchText} and can see ${expectedCount} result(s)`, async ({ page }) => {
            const dashboard = new DashboardPage(page);
            await dashboard.searchFor(searchText);
            await dashboard.numberOfSearchResultShouldBe(expectedCount);
            await dashboard.searchResultsShouldHave(searchText);
        });
    });

    test('Search should be empty by default', async ({ page }) =>{
        const dashboard = new DashboardPage(page);
        await dashboard.searchTextBoxShouldBeEmpty();
        await dashboard.numberOfSearchResultShouldBe(12); //show all 12 menu items
    });

});