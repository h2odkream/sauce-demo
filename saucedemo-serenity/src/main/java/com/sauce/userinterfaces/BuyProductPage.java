package com.sauce.userinterfaces;

import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;

public class BuyProductPage {

	public static final Target INVENTORY_LIST = Target.the("Inventory list").locatedBy("//div[@class='inventory_list']");
	public static final Target PRODUCT = Target.the("Product of inventory list").locatedBy("//div[contains(text(), \"Backpack\")]");
	//public static final Target PRODUCT = Target.the("Product of inventory list").locatedBy("//button[@class=\"ant-btn ant-btn-primary ant-btn-block\"]");

	public static final Target ADD_TO_CART_BTN = Target.the("Add to cart button").located(By.id("add-to-cart-sauce-labs-backpack"));
	public static final Target REMOVE_CART_BTN = Target.the("Complete your profile").located(By.id("remove-sauce-labs-backpack"));
	public static final Target BACK_TO_PRODUCT = Target.the("Go back").located(By.id("back-to-products"));
	public static final Target SHOPPING_CART = Target.the("Shopping cart").locatedBy("//a[@class=\"shopping_cart_link\"]");
	public static final Target TEXT_YOU_CART = Target.the("Text your cart").locatedBy("//span[contains(text(), \"Your Cart\")]");
	public static final Target CHECKOUT_BTN = Target.the("Checkout button").located(By.id("checkout"));
	public static final Target FIRST_NAME = Target.the("First name").located(By.id("first-name"));
	public static final Target LAST_NAME = Target.the("Last name").located(By.id("last-name"));
	public static final Target POSTAL_CODE = Target.the("Postal codigo").located(By.id("postal-code"));
	public static final Target CONTINUE_BTN = Target.the("Continue button").located(By.id("continue"));
	public static final Target TEXT_PAYMENT_INFO = Target.the("Complete your profile").locatedBy("//div[contains(text(), \"Payment Information\")]");
	public static final Target FINISH_BTN = Target.the("Complete your profile").located(By.id("finish"));
	public static final Target CONFIRMATION_MESSAGE = Target.the("Complete your profile").locatedBy("//h2[contains(text(), \"Thank you for your order!\")]");
}