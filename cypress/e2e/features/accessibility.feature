Feature: Accessibility tests on the page
    I want to ensure that my page is accessible

    Scenario: John Lewis Home Page should have no accessibility violations
        Given I open the John Lewis Home Page
        Then the page should be accessible