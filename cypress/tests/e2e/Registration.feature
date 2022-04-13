Feature: Registration processes

  Scenario: Successful registration with random data
    Given user opened registration page
    When user registered with randomly generated data
    Then user is logged in

  Scenario: Password restoration
    Given user logged out
    When user opens "restore password" page
    And confirms password restoration
    Then "Check email" page is opened