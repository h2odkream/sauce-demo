import CheckoutPage from '../user-interfaces/checkout.page'
import { test, expect, Page } from '@playwright/test'

class Checkout {
    readonly page: Page
    productName: string

    constructor(productName) {
      this.productName = productName;
    }
  
    static product(productName) {
      return new Checkout(productName);
    }
   

    async performAs() {
        let checkoutPage: CheckoutPage
        checkoutPage = new CheckoutPage(this.page)
        
        await checkoutPage.shoppingCart().click();
        await expect(checkoutPage.textYourCart()).toBeVisible();

        //Proceso de compra
        await checkoutPage.checkoutBtn().click();
        await checkoutPage.firstName().fill('Karen');
        await checkoutPage.lastName().fill('Agualimpia');
        await checkoutPage.postalCode().fill('12345');
        await checkoutPage.continueBtn().click();
        await expect(checkoutPage.texPaymentInfo()).toBeVisible();
        await checkoutPage.finishBtn().click();
        await expect(checkoutPage.confirmationMessage()).toBeVisible();
        await this.page.pause();
      }
}
