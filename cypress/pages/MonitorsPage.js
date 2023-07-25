class MonitorsPage {

    visit() {
        cy.visit('https://www.johnlewis.com/browse/electricals/monitors/_/N-2pf0');
    }

    selectMonitorPriceRage() {
        cy.get('[data-test="filter-price-100-150"]').check();
        cy.get('[data-test="filter-price-100-150"]').should('be.checked');

    }
    checkApiResponseForMonitorId() {
        cy.request({
          method: 'POST',
          url: 'https://api.taggstar.com/api/v2/key/johnlewiscom/category/visit',
          body: {
            "visitor": {
              "sessionId": "792a902f-2aed-11ee-a0be-f1a4c46397ae",
              "id": "0b17bd3f-1bd9-11ee-a79d-110f15af5e9d"
            },
            "category": "/electricals/monitors",
            "products": [
              "110400255",
              "110260919",
              "110260921",
              "5985922",
              "109507657",
              "6360665",
              "5919808",
              "109507655",
              "5418075",
              "6318330",
              "5980159"
            ],
            "client": {
              "expectedSiteConfigVersion": "38/2"
            },
            "experience": {
              "id": "plp-v4"
            }
          }
        }).then((response) => {
          // Assert that the response contains the "product" object with "id" value "5980159"
          expect(response.status).to.eq(200); // Assuming a successful response
          expect(response.body).to.have.property('product').to.deep.include({ "id": "5980159" });
        });
      }
}      
export const monitorsPage = new MonitorsPage();