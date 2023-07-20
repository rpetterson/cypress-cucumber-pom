class ProductsPage {
  visit() {
    cy.visit('/');
  }
buyMostExpensiveProduct(){

  
    let highestPrice = 0;
    let highestPricedItem;
  
    // Go through each item and find the highest priced one
    cy.get('.inventory_item').each(($el, index, $list) => {
      const priceText = $el.find('.inventory_item_price').text();
      const price = parseFloat(priceText.replace('$', ''));  // Remove the dollar sign and parse the price to a float
  
      if (price > highestPrice) {
        highestPrice = price;
        highestPricedItem = $el;
      }
    }).then(() => {
      // Once we have found the highest priced item, click on it.
      cy.wrap(highestPricedItem).find('.btn').click();
    })
  }

  cartUpdated() {
    cy.get('#shopping_cart_container > a > span').should('contain', '2');
  }
  
}  

  export const productsPage = new ProductsPage();

