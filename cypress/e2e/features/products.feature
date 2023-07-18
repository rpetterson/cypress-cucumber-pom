Feature: Product page
    Feature User can view and buy products

    Background:
        Given A web browser is at the saucelabs login page 

    Scenario: User selects most expensive product and adds to cart
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        When A User selects the most expensive product and adds to the cart
      # Then the cart wil be updated



