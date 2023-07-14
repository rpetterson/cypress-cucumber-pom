Feature: Navigation on John Lewis

Scenario: Navigate to Televisions Page
  Given I open John Lewis homepage
  When I hover over Electricals
  When I click on Televisions
  Then I will be taken to the Televisions page

Scenario: Select most expensive Samsung TV and add to cart  
  Given I open John Lewis homepage
  When I hover over Electricals
  When I click on Televisions
  When I will be taken to the Televisions page
  When I select the most expensive Samsung TV
  #When I add this to the cart
  #Then I will see that the cart contains 1 item
