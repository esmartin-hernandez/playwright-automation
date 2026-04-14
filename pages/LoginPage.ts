import { Page, expect } from '@playwright/test';

export default class LoginPage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goTo(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string){
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#login-button').click();
    }

    async validateSuccessfulLogin(){
        await expect(this.page).toHaveURL(/inventory/);
    }

    async validateErrorMessage(){
        await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    }
}