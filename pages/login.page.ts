import { expect, Locator, Page } from '@playwright/test';
import { step } from '../step';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly usernameRequiredText: Locator;
    readonly passwordRequiredText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.usernameRequiredText = page.getByText('Required').first();
        this.passwordRequiredText = page.getByText('Required').nth(1);
    }

    @step('Navigate to login page')
    async goTo() {
        await this.page.goto('');
    }

    @step('Login by entering username and password')
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    @step('Enter username')
    async enterUserName(username: string){
        await this.username.fill(username);
    }

    @step('Enter password')
    async enterPassword(password: string){
        await this.password.fill(password);
    }

    @step('Clear username')
    async clearUserName(){
        await this.username.clear();
    }

    @step('Click login button')
    async clickLogin(){
        await this.loginButton.click();
    }

    @step('Should display error')
    async shouldDisplayError(errorMessage: string){
        await expect(this.page.getByText(errorMessage)).toBeVisible();
    }

    @step('Should say username is required')
    async shouldDisplayRequiredForUserName(){
        await expect(this.usernameRequiredText).toBeVisible();
    }

    @step('Should say password is required')
    async shouldDisplayRequiredForPassword(){
        await expect(this.passwordRequiredText).toBeVisible();
    }
}