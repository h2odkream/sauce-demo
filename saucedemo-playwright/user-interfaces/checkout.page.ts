import {Page, Locator} from '@playwright/test'

class CheckoutPage{
    readonly page: Page
    shoppingCartElm: Locator
    textYourCartElm: Locator
    checkoutBtnElm: Locator
    firstNameElm: Locator
    lastNameElm: Locator
    postalCodeElm: Locator
    continueBtnElm: Locator
    texPaymentInfoElm: Locator
    finishBtnElm: Locator
    confirmationMessageElm: Locator

    constructor(page: Page){
      this.page = page
        this.shoppingCartElm = page.locator('[class="shopping_cart_link"]');
        this.textYourCartElm = page.getByText('Your Cart');
        this.checkoutBtnElm = page.locator('[id="checkout"]');
        this.firstNameElm = page.locator('[id="first-name"]');
        this.lastNameElm = page.locator('[id="last-name"]');
        this.postalCodeElm = page.locator('[id="postal-code"]');
        this.continueBtnElm = page.locator('[id="continue"]');
        this.texPaymentInfoElm = page.getByText('Payment Information');
        this.finishBtnElm = page.locator('[id="finish"]');
        this.confirmationMessageElm = page.getByText('Thank you for your order!');
    }
    public shoppingCart() {
        return this.shoppingCartElm;
      }
      public textYourCart() {
        return this.textYourCartElm;
      }
      public checkoutBtn() {
        return this.checkoutBtnElm;
      }
      public firstName() {
        return this.firstNameElm;
      }
      public lastName() {
        return this.lastNameElm;
      }
      public postalCode() {
        return this.postalCodeElm;
      }
      public continueBtn() {
        return this.continueBtnElm;
      }
      public texPaymentInfo() {
        return this.texPaymentInfoElm;
      }
      public finishBtn() {
        return this.finishBtnElm;
      }
      public confirmationMessage() {
        return this.confirmationMessageElm;
      }

}
export default CheckoutPage