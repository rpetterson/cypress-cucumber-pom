import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  //import ElectricalsPage from "../../support/pages/ElectricalsPage";
  import {productsPage} from '@pages/ProductsPage'
  
  
  
  When("A User selects the most expensive product and adds to the cart", () => {
    productsPage.buyMostExpensiveProduct();
  });
  