package com.sauce.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.targets.Target;
import net.serenitybdd.screenplay.waits.Wait;

import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isPresent;
import static net.serenitybdd.screenplay.questions.WebElementQuestion.the;

    public class ValidateIf implements Question<Boolean> {
        private final Target element;

        public ValidateIf(Target element){
            this.element = element;
        }

        @Override
        public Boolean answeredBy(Actor actor) {
            actor.attemptsTo(
                    Wait.until(the(element), isPresent()).forNoMoreThan(20).seconds()
            );
            return element.isVisibleFor(actor);
        }

        public static ValidateIf theElementIsPresent(Target element){
            return new ValidateIf(element);
        }
}
