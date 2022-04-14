Feature: Login process

  Scenario: Successful login with valid credentials
    Given user opened login page
    When user enters existing login and password
    And confirms login
    Then user is logged in