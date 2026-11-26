Feature: Shopping cart

  As a shopper
  I want to add products to my cart
  So that I can purchase the products I need

  Background:
    Given the shopper is on the Toolshop homepage

  Scenario: Add an available product to the cart
    Given the shopper views an available product
    When the shopper adds the product to the cart
    Then the product should be added successfully
    And the cart should display the selected product

  Scenario: Add multiple quantities of a product
    Given the shopper views an available product
    When the shopper selects a quantity of 2
    And adds the product to the cart
    Then the cart should contain 2 units of that product