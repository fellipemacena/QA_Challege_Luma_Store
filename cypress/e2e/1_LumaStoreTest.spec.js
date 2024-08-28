///<reference types = "cypress"/>

import HomePage from "../e2e/pages/page/homePage";
import SearchPage from "../e2e/pages/page/searchPage";
import ProductPage from "../e2e/pages/page/productPage";
import CheckoutPage from "../e2e/pages/page/checkoutPage";
import CreateAnAccountPage from "../e2e/pages/page/createAnAccountPage";
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


  describe("Test Case 1 (Obrigatório 2 - Valida carregamento Home Page): Validates access to the home page through the title", () => {
    context("Given I have access home page", () => {
      it("Then I validate the accesses successfully", () => {
        HomePage.validateHomePage();
      });
    });
  });

  describe("Test Case 2: Validates access to the home page using the term Hot Sellers", () => {
    context("Given I have access home page", () => {
      it("Then I successfully validate the term Hot Sellers", () => {
        HomePage.validateHotSellers();
      });
    });
  });

  describe("Test Case 3 (Obrigatório 2 - Busca Shirt Meu superior + Diferencial 1): I'm looking for Shirt in search", () => {
    context("Given I have access home page", () => {
      it("When I use search to find shirt", () => {
        HomePage.enterProductInSearch("Shirt");
      });

      it("Then I validate that the product was researched correctly", () => {
        SearchPage.validateSearchResults();
      });
    });
  });

  
  describe("Test Case 4: Select the product in search result page", () => {
    context("Given that I have access to the search results page", () => {
      it("Then I choose one product with successfully", () => {
        SearchPage.selectFirstProduct();
      });
    });
  });

  describe("Test Case 5 (Obrigatório 2 - Adicionar um produto no carrinho): Add a product to the cart", () => {
    context("Given I'm on the selected product page", () => {
      it("When I select the product size", () => {
        ProductPage.selectSize();
      });

      it("And I select the color product ", () => {
        ProductPage.selectColor();
      });

      it("And I add the product to the cart ", () => {
        ProductPage.addToCart();
      });

    });
  });

  describe("Test Case 6 (Obrigatório 2 - Realizar checkout): Checkout Process", () => {
      context("Given I'm Proceed Checkout page", () => {
  
        it("When I validate access Checkout page", () => {
          CheckoutPage.validateShippingCheckoutPage();
        });

        it("And I fill checkout form", () => {
          CheckoutPage.fillCheckoutFormWithRandomData();
        });
  
        it("And I select shipping methods", () => {
          CheckoutPage.selectRadioShippingMethods();
        });

        it("And I select next button", () => {
          CheckoutPage.selectNextButton();
        });

        it("And I validate review payment page", () => {
          CheckoutPage.validateReviewPaymentPage();
        });

        it("And I select payment method check box", () => {
          CheckoutPage.clickPaymentMethodCheckBox();
        });

        it("And I click place order button", () => {
          CheckoutPage.clickPlaceOrderButton();
        });

        it("And I validate finish ckeckout process", () => {
          CheckoutPage.validateFinishCheckoutMessage();
        });

        it("Then I click continue shopping button", () => {
          CheckoutPage.clickContinueShoppingButton();
        });
  
      });

    });

});
