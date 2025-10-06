import { expect, Locator, Page } from "@playwright/test";
import { step } from "../step";

export class DashboardPage {
    readonly page: Page;
    readonly dashboardButton: Locator;
    readonly dashboardSearch: Locator; 
    readonly dashboardMenuItems: Locator;

    constructor(page:Page) {
        this.page = page;
        this.dashboardButton = page.getByRole('link', { name: 'Dashboard' });
        this.dashboardSearch = page.getByRole('textbox', { name: 'Search' });
        this.dashboardMenuItems = page.locator('.oxd-main-menu span');
    }

    @step('Navigate to dashboard')
    async goTo() {
        await this.page.goto('web/index.php/dashboard/index');
    }

    @step('Dashboard page should be displayed')
    async shouldBeDisplayed(){
        await expect(this.page).toHaveURL('web/index.php/dashboard/index');
        await expect(this.dashboardButton).toBeVisible();
    }

    @step('Search for a text')
    async searchFor(searchText: string){
        await this.dashboardSearch.fill(searchText);
    }

    @step('Search textbox should be empty')
    async searchTextBoxShouldBeEmpty(){
       await expect(this.dashboardSearch).toHaveText('');
    }

    @step('Number of search result should be correct')
    async numberOfSearchResultShouldBe(numOfResults: number){
        await expect(this.dashboardMenuItems).toHaveCount(numOfResults);
    }

    @step('Search results should show correctly')
    async searchResultsShouldHave(searchText: string){
        const searchCount = await this.dashboardMenuItems.count();
        for (let i = 0; i < searchCount; i++) {
            const menuItem: Locator = this.dashboardMenuItems.nth(i);
            await expect(menuItem).toContainText(searchText,{ignoreCase: true});
        }
    }

}