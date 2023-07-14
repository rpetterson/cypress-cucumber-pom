import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
//import ElectricalsPage from "../../support/pages/ElectricalsPage";
import {electricalsPage} from '@pages/ElectricalsPage'

//const electricalsPage = new ElectricalsPage();

Given('I open John Lewis homepage', () => {
    electricalsPage.visit();
});

When('I hover over Electricals', () => {
  electricalsPage.hoverOverElectricals();
});

When('I click on Televisions', () => {
  electricalsPage.clickOnTelevisions();
});

Then('I will be taken to the Televisions page', () => {
  electricalsPage.verifyTelevisionsPage();
});

When('I select the most expensive Samsung TV', () => {
  electricalsPage.selectMostExpensiveSamsungTv();
});
