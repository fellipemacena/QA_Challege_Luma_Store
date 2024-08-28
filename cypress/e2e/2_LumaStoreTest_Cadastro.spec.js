///<reference types = "cypress"/>

import HomePage from "../e2e/pages/page/homePage";
import CreateAnAccountPage from "../e2e/pages/page/createAnAccountPage";

describe("Scenario: Luma Store Challenge", { testIsolation: false }, () => {
  before("", () => {
    cy.visit("https://magento.softwaretestingboard.com");
  });

  after("", () => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
  });




  describe("Test Case Diferencial 2: Create an account ", () => {
    context("Given I have access home page", () => {
      it("When I access create an account page", () => {
        HomePage.clickCreatAnAccountButton();
      });

      it("And I validate create new customer account page", () => {
        CreateAnAccountPage.validateCreateNewCustomerAccountPage();
      });

      it("And I fill form create a new an account", () => {
        CreateAnAccountPage.createNewUserWithRandomData();
      });

      it("And I click to create a new an account button", () => {
        CreateAnAccountPage.clickCreateAnAccountButton();
      });

      it("And I validate my account page", () => {
        CreateAnAccountPage.validateMyAccountPage();
      });

      it("Then I return home page", () => {
        CreateAnAccountPage.returnHomePageFromMyAccountPage();
      });

    });
  });


});
