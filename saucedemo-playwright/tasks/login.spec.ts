import { test, expect, Page } from '@playwright/test'
import LoginPage from '../user-interfaces/login.page'

class Login {
    readonly page: Page
    username: string
    password: string
    loginPage: LoginPage
    

    constructor(username: string, password: string, page) {
      this.page = page
      this.username = username;
      this.password = password;
      this.loginPage = new LoginPage(this.page)
    }
  
    static withCredentials(username: string, password: string, page) {
      return new Login(username, password, page);
    }
  
    async performAs() {
        console.log(this.loginPage.username())
        await this.loginPage.username().fill(this.username);
        await this.loginPage.password().fill(this.password);
        await this.loginPage.loginBtn().click();
    }
  }
  export default Login
