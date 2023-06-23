import {Page, Locator} from '@playwright/test'

class ProductPage {
    readonly page: Page
    inventory: Locator
    productItem: Locator
    addToCart: Locator
    removeCart: Locator
    backProduct: Locator

    constructor(page: Page) {
        this.inventory = page.locator('div[class=\'inventory_list\']');
        this.productItem= page.getByText('backpack');
        this.addToCart = page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
        this.removeCart = page.locator('button[id="remove-sauce-labs-backpack"]');
        this.backProduct = page.locator('[data-test="back-to-products"]');
    }
    public inventoryList() {
        return this.inventory;
      }
      public product() {
        return this.productItem;
      }
      public addToCartBtn() {
        return this.addToCart;
      }
      public removeCartBtn() {
        return this.removeCart;
      }
      public goBackProduct() {
        return this.backProduct;
      }

}
export default ProductPage