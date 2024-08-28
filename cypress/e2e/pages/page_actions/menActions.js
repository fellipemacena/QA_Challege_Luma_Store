import MenElements from '../page_elements/menElements';

export class MenActions {

  static validateMenPage(){
    cy.get(MenElements.REFERENCE_MEN_PAGE).should('be.visible').should('contain.text','Men')
  }

  static selectHoodiesAndSweatShirts() {
    cy.get(MenElements.HOODIES_AND_SWEATSHIRTS).should('be.visible').click();
  }

  static selectRandomProduct(){
     // Obter todos os elementos de produto e verifica se há produtos na lista
  cy.get(MenElements.SEARCH_RANDOM_PRODUCT).should('have.length.greaterThan', 0).then((products) => {

    // Escolhe um índice aleatório
    const randomIndex = Math.floor(Math.random() * products.length);
    
    //Variável global para usar no método de validação da página do produto selecionado
    Cypress.env('selectProduct', randomIndex)
    // Seleciona o produto aleatório
    cy.wrap(products[randomIndex]).find('.product-item-link').click();
  });
  }

  static productComment(){
    cy.wait(2000)
    cy.get(MenElements.REVIEWS_TAB).should('be.visible').click();
    cy.get(MenElements.RATING).should('be.visible').click({ force: true });
    cy.get(MenElements.NICKNAME).should('be.visible').type('testeqazaq').should('have.value','testeqazaq');
    cy.get(MenElements.SUMMARY).should('be.visible').type('testeqazaq').should('have.value','testeqazaq');
    cy.get(MenElements.REVIEW).should('be.visible').type('testeqazaq').should('have.value','testeqazaq');
    cy.get(MenElements.SUBMIT_REVIEW).should('be.visible').click();

    cy.wait(5000)
  }

  static addToCartMenProduct(){
    cy.wait(2000)
    cy.get(MenElements.ADD_TO_CART_BUTTON).should('be.visible').click();
    cy.get(MenElements.MESSAGE_SUCCESS_ADD_PRODUCT_TO_CART).should('be.visible').should('contain.text','You added');
    cy.wait(2000)
  }

}

export default MenActions;