Feature: Login process

  Background:
    Given user opened login page

  Scenario: Successful login with valid credentials
    When user enters existing login
    And user enters existing password
    And confirms login
    Then user is logged in

  Scenario: Unsuccessful login with wrong password
    When user enters existing login
    And user enters wrong password "123"
    And confirms login
    Then wrong login or password message is displayed
    And user is on login page