# language: en
Feature: Enter the SauceDemo
  I as a user want to log in
  Add products to cart
  To finish the purchase process

  Scenario Outline: Purchase process
    Given the "user" login
      | <url> | <user> | <password> |
  When buy a product
    | <firstname> | <lastname> | <postalcode> |
    Then he should validate that product purchase was successfull
  Examples:
    | url                        | user          | password     | firstname | lastname   | postalcode |
    | https://www.saucedemo.com/ | standard_user | secret_sauce | Karen    | Agualimpia | 12345 |




