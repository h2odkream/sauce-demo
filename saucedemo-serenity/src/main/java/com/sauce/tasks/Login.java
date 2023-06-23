package com.sauce.tasks;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;

import static com.sauce.userinterfaces.LoginPage.*;
import static net.serenitybdd.screenplay.Tasks.instrumented;

public class Login implements Task
{
    private String username;
    private String password;
    public Login(String user, String password){
        this.username =user;
        this.password =password;
    }

    public static Performable con(String user, String password){
        return instrumented(Login.class, user, password);
    }
    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(USER),
                Enter.keyValues(username).into(USER),
                Click.on(PASSWORD),
                Enter.keyValues(password).into(PASSWORD),
                Click.on(LOGIN_BUTTON)
        );

    }
}
