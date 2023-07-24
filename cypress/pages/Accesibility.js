

import 'cypress/support/commands'
class Accesibility {
    thePageShouldBeAccessible(){
       // cy.injectAxe(); // Injects the axe-core library
       // cy.checkA11y(); // Checks the document and all child elements for accessibility issues   
    }
  }
  
  export const accesibility = new Accesibility();