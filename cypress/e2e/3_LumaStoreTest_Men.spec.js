///<reference types = "cypress"/>

import HomePage from "../e2e/pages/page/homePage";
import ProductPage from "../e2e/pages/page/productPage";
import MenPage from "../e2e/pages/page/menPage";

describe("Scenario: Luma Store Challenge", { testIsolation: false }, () => {
  before("", () => {
    cy.visit("https://magento.softwaretestingboard.com");
  });

  after("", () => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
  });


  describe("Test Case Diferencial 3 e 4 - Produto Aleatório Masculino no carrinho e comentado: Search for a random men's item, add a comment to it and add to cart", () => {
    context("Given I have access home page", () => {
      it("When I click option men", () => {
        HomePage.clickMenOption();
      });

      it("And I validate access to the men's page", () => {
        MenPage.validateMenPage();
      });

      it("And I select the hoodies and sweatshirts option", () => {
        MenPage.selectHoodiesAndSweatShirts();
      });

      it("And I randomly select an option from the page result", () => {
        MenPage.selectRandomProduct();
      });

      it("And I make a comment on the product", () => {
        MenPage.productComment();
      });

      it("And I select the product size", () => {
        ProductPage.selectSize();
      });

      it("And I select the color product ", () => {
        ProductPage.selectColor();
      });

      it("Then I add the product to the cart ", () => {
        MenPage.addToCartMenProduct();
      });

    });
  });

});
