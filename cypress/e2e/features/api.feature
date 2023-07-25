Feature: API testing
    I want to ensure that the correct products are returned from my search

    Scenario: Monitors within the price range of £100 to £150 are displayed
       Given I navigate to Monitors
       When I check the price box for £100-£150
       Then I should see within the returned results Samsung LS24AM506NUXXU