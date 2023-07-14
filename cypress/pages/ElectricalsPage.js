class ElectricalsPage {
    visit() {
      cy.visit('https://www.johnlewis.com/');
    }
  
    hoverOverElectricals() {
      // Get the menu by class name and then trigger 'mouseover' event.
      // Replace with the actual selector from your website.
      cy.wait(2000);
      cy.get('[data-testid="nav-electricals"]').realHover();
    }
  
    clickOnTelevisions() {
      // Trigger 'mouseover' event on 'Television & Audio' sub-menu and then click on 'Televisions'.
      // Replace with the actual selector from your website.
      cy.wait(2000);
      cy.get('[data-testid="flyout-heading-television-&-audio"]').contains('Television & Audio').realHover();
      cy.get('[data-testid="nav-televisions"]').contains('Televisions').click();
    }
  
    verifyTelevisionsPage() {
      // Verify that the URL now includes '/televisions'.
      // Adjust this check based on the actual behavior of your website.
      cy.url().should('include', '/televisions');
    }

    selectMostExpensiveSamsungTv(){
      cy.get('[button.data-test="allow-all"]').click();
      cy.get('.option_c-option__primary-label__rs_Kq').click();
      


    }
  }
  
  //export default ElectricalsPage;
  
  export const electricalsPage = new ElectricalsPage();