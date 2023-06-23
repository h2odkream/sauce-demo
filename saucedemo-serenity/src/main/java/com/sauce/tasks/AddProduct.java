package com.sauce.tasks;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.waits.WaitUntil;

import static com.sauce.userinterfaces.BuyProductPage.*;
import static com.sauce.userinterfaces.BuyProductPage.PRODUCT;
import static net.serenitybdd.screenplay.Tasks.instrumented;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isVisible;

public class AddProduct implements Task
{

    public static Performable toCart(){
        return instrumented(AddProduct.class);
    }
    @Override
    public <T extends Actor> void performAs(T actor) {
        int i =0;

        actor.attemptsTo(
                WaitUntil.the(INVENTORY_LIST,isVisible()),
                Click.on(INVENTORY_LIST),
                Click.on(PRODUCT),
                WaitUntil.the(BACK_TO_PRODUCT, isVisible()),
                Click.on(ADD_TO_CART_BTN),
                WaitUntil.the(REMOVE_CART_BTN,isVisible())
        );

    }
}
