package com.sauce.runners;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
		features = {"src/test/resources/features/sauce_demo.feature"},
		glue = {"com.sauce.stepdefinitions"},
		snippets = CucumberOptions.SnippetType.CAMELCASE
)
public class SauceDemoRunner {

}
