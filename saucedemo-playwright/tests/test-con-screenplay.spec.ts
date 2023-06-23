import { test, expect } from '@playwright/test';

import Actor from '../tasks/actor.spec';
import BrowseTheWeb from '../tasks/browse.spec';
import Login from '../tasks/login.spec';
import AddToCart from '../tasks/product.spec';

test('User can purchase a product', async ({ page }) => {
  let browseTheWeb: BrowseTheWeb
  browseTheWeb = new BrowseTheWeb(page)
  // Create an actor named Alice who can browse the web with Playwright page
  const karen = new Actor('Karen').can(BrowseTheWeb.with(page).visit("https://www.saucedemo.com/"));
 
  // Karen performs the login task with her credentials
  await karen.perform(Login.withCredentials('standard_user', 'secret_sauce',page));

  // Karen performs the add to cart task with the product name 'Sauce Labs Backpack'
  await karen.perform(AddToCart.product('Sauce Labs Backpack', page));

  // Karen asks for the text of the shopping cart backpack element

  // Expect the cart backpack to show '1'
});