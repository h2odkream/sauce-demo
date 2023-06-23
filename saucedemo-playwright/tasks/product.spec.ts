import LoginPage from '../user-interfaces/login.page'
import ProductPage from '../user-interfaces/product.page';
import { test, expect, Locator, Page } from '@playwright/test'

class AddToCart {
    readonly page: Page
    productName: string

    constructor(productName, page) {
      this.page = page
      this.productName = productName;
    }
  
    static product(productName, page) {
      return new AddToCart(productName, page);
    }
   

    async performAs() {
        let productPage: ProductPage
        productPage = new ProductPage(this.page)

        if(await productPage.product().isVisible()){
            await productPage.product().click();
            //wait for 2 seconds
            await this.page.waitForTimeout(2000);
            await expect(productPage.goBackProduct()).toBeVisible();
            await productPage.addToCartBtn().click();
            await expect(productPage.removeCartBtn()).toBeVisible();
          }
      }
}
export default AddToCart
