package com.sauce.stepdefinitions;

import com.sauce.questions.ValidateIf;
import com.sauce.tasks.AddProduct;
import com.sauce.tasks.BuyProduct;
import com.sauce.tasks.Login;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.actions.Open;

import java.util.List;

import static com.sauce.exceptions.Error.ERROR_WHEN_PURCHASING_MESSAGE;
import static com.sauce.userinterfaces.BuyProductPage.CONFIRMATION_MESSAGE;
import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorCalled;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class SauceDemoStepDefinitions {

    @Given("the {string} login")
    public void login(String actor, DataTable dataTable){
        List<String> dataUser = dataTable.row(0);
        theActorCalled(actor).attemptsTo(
                Open.url(dataUser.get(0)),
                Login.con(dataUser.get(1), dataUser.get(2))
        );
    }

    @When("buy a product")
    public void buyProduct(DataTable dataTable) {
        List<String> data = dataTable.row(0);
        theActorInTheSpotlight().attemptsTo(
                AddProduct.toCart(),
                BuyProduct.with(data)
        );
    }

    @Then("he should validate that product purchase was successfull")
    public void heShouldValidateThatProductWasSuccessfull() {
        theActorInTheSpotlight().should(
                seeThat(ValidateIf.theElementIsPresent(CONFIRMATION_MESSAGE))
                        .orComplainWith(Error.class, ERROR_WHEN_PURCHASING_MESSAGE)
        );
    }




}
