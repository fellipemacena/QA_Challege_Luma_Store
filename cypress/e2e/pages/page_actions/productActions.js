import ProductElements from '../page_elements/productElements';

export class ProductActions {

  static selectSize() {
    cy.wait(2000)
    cy.get(ProductElements.SIZE).should('be.visible').click();
  }

  static selectColor() {
    cy.wait(2000)
    cy.get(ProductElements.COLOR).should('be.visible').then(($colors) => {
      // Seleciona um índice aleatório
      const randomIndex = Math.floor(Math.random() * $colors.length); 
      // Clica na cor selecionada aleatoriamente 
      cy.wrap($colors[randomIndex]).click();  
    });
  }

  static addToCart() {
    cy.wait(2000)
    cy.get(ProductElements.ADD_TO_CART_BUTTON).should('be.visible').click();
    cy.get(ProductElements.MESSAGE_SUCCESS_ADD_PRODUCT_TO_CART).should('be.visible').should('contain.text','You added');
    cy.wait(2000)
    cy.get(ProductElements.CART_ACCESS_BUTTON).should('be.visible').click();
    cy.get(ProductElements.PROCEED_CHECKOUT_BUTTON).should('be.visible').click();
    cy.wait(2000)
  }

  static accessProceedCheckout(){
    cy.get(ProductElements.CART_ACCESS_BUTTON).should('be.visible').click();
    cy.get(ProductElements.PROCEED_CHECKOUT_BUTTON).should('be.visible').click();
  }

  
}

export default ProductActions;