Feature: Registration process

  Scenario: Successful registration with random data
    Given user opened registration page
    When user registered with randomly generated data
    Then user is logged in