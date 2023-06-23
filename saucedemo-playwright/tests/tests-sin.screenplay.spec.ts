import { test, expect } from '@playwright/test';

test('Sauce Demo', async ({page})=>{
  await page.goto('https://www.saucedemo.com/');

  //Variables
 const user= 'standard_user';
 const pass='secret_sauce';

 const username = page.locator('input[id=\'user-name\']');
 const password = page.locator('input[id=\'password\']');
 const loginBtn= page.locator('input[id=\'login-button\']');
 const inventory = page.locator('div[class=\'inventory_list\']');

 const product= page.getByText('backpack');
 const addToCartBtn = page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
 const removeCartBtn = page.locator('button[id="remove-sauce-labs-backpack"]');
 const backProduct = page.locator('[data-test="back-to-products"]');
 const shoppingCart = page.locator('[class="shopping_cart_link"]');
 const textYourCart = page.getByText('Your Cart');
 const checkoutBtn = page.locator('[id="checkout"]');
 const firstName = page.locator('[id="first-name"]');
 const lastName = page.locator('[id="last-name"]');
 const postalCode = page.locator('[id="postal-code"]');
 const continueBtn = page.locator('[id="continue"]');
 const texPaymentInfo = page.getByText('Payment Information');
 const finishBtn = page.locator('[id="finish"]');
 const confirmationMessage = page.getByText('Thank you for your order!');

 //Tarea Login
 await username.fill(user);
 await password.fill(pass);
 await loginBtn.click();
 await expect(inventory).toBeVisible();

//Verifica que se muestren resultados relacionados con "backpack".

//Task buscar carrito y agregarlo
if(await product.isVisible){
  await product.click();
  await expect(backProduct).toBeVisible();
  await addToCartBtn.click();
  await expect(removeCartBtn).toBeVisible();
}

await shoppingCart.click();
await expect(textYourCart).toBeVisible();

//Proceso de compra
await checkoutBtn.click();
await firstName.fill('Karen');
await lastName.fill('Agualimpia');
await postalCode.fill('12345');
await continueBtn.click();
await expect(texPaymentInfo).toBeVisible();
await finishBtn.click();
await expect(confirmationMessage).toBeVisible();
await page.pause();

});