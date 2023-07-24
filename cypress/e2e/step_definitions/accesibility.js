import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  //import {accesibility} from '@pages/Accesibility'

  When("I open the John Lewis Home Page", () => {
    cy.visit("https://www.johnlewis.com/");
    
  });

  Then("the page should be accessible", () => {
   // accesibility.thePageShouldBeAccessible();
});

