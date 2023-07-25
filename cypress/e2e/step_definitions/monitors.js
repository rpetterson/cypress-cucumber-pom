import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {monitorsPage} from '@pages/MonitorsPage'

  Given("I navigate to Monitors", () => {
    monitorsPage.visit();
  });

  When("I check the price box for £100-£150", () => {

  });

  Then("I should see within the returned results Samsung LS24AM506NUXXU", () =>{

  });