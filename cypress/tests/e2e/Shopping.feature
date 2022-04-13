Feature: Shopping processes

  Scenario: Adding items to wishlist
    Given user opened registration page
    And user registered with randomly generated data
    When user adds 5 items to wishlist
    Then 5 items are displayed in wishlist

  Scenario: Adding items from wishlist to cart and verifying merchandise value
    Given user added all wishlist items to cart
    When user goes to cart
    Then cart contains 5 items
    And cart counter shows 5 items
    And merchandise value is calculated correctly