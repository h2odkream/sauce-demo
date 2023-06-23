package com.sauce.tasks;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.waits.WaitUntil;

import java.util.List;

import static com.sauce.userinterfaces.BuyProductPage.*;
import static net.serenitybdd.screenplay.Tasks.instrumented;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isVisible;

public class BuyProduct implements Task
{
    private List<String> data;
    public BuyProduct(List<String> data){
        this.data =data;
    }

    public static Performable with(List<String> data){
        return instrumented(BuyProduct.class, data);
    }
    @Override
    public <T extends Actor> void performAs(T actor) {
        int i =0;

        actor.attemptsTo(
                Click.on(SHOPPING_CART),
                WaitUntil.the(TEXT_YOU_CART,isVisible()),
                Click.on(CHECKOUT_BTN),
                Enter.keyValues(data.get(i)).into(FIRST_NAME),
                Enter.keyValues(data.get(++i)).into(LAST_NAME),
                Enter.keyValues(data.get(i)).into(POSTAL_CODE),
                Click.on(CONTINUE_BTN),
                WaitUntil.the(TEXT_PAYMENT_INFO,isVisible()),
                Click.on(FINISH_BTN),
                WaitUntil.the(CONFIRMATION_MESSAGE,isVisible())
        );

    }
}
