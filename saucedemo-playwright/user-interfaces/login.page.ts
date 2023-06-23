import {Page, Locator} from '@playwright/test'

class LoginPage {
    readonly page: Page
    user: Locator
    pass: Locator
    login: Locator

    constructor(page: Page) {
      if (!page) {
        throw new Error('The "page" object is undefined.');
      }
        this.page = page
        this.user = page.locator('input[id=\'user-name\']');
        this.pass = page.locator('input[id=\'password\']');
        this.login= page.locator('input[id=\'login-button\']');
        
    }

    public username() {
        return this.user;
      }

      public password() {
        return this.pass;
      }

      public loginBtn() {
        return this.login;
      }
}

export default LoginPage