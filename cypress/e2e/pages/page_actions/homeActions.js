import HomeElements from '../page_elements/homeElements';

export class HomeActions {

  static validateHomePage(){
    // Validação da home page pelo Title
    cy.get(HomeElements.TITLE).invoke('text').then(text =>{
      cy.wrap(text).eq.toString('Home Page');
    })
  }

  static validateHotSellers(){
    //Método de validação da home page com base no termo Hot Sellers, onde foi identificado que esse termo só existe na home page.
    cy.get(HomeElements.HOT_SELLERS).should('be.visible').should('have.text', 'Hot Sellers');
  }

  static accessProceedCkeckoutButton(){
    cy.get(HomeElements.SHOWCART_BUTTON).should('be.visible').click();
    cy.wait(2000)
    cy.get(HomeElements.PROCEED_CHECKOUT_BUTTON).should('be.visible').click();
  }

  static enterProductInSearch(product){
  cy.wait(2000)
     // Intercepta a requisição com trecho '**/search/ajax/suggest*'
  cy.intercept('GET', '/search/ajax/suggest/*').as('getSearchAutoComplete'); 
  cy.get(HomeElements.SEARCH_ITENS).should('be.visible').clear().type(product, { delay: 0 }).should('have.value', product);

  // Aguarda o retorno da requisição antes de continuar
  cy.wait('@getSearchAutoComplete'); 

  cy.get(HomeElements.SEARCH_AUTOCOMPLETE_ITENS).should('be.visible').within(() => {
      cy.get('li').last().find('.qs-option-name').then(($lastItem) => {
        const selectedProductAutoCompleteHomePage = $lastItem.text().trim();
        //Variável global para usar no método de validação da página de Search Results
        Cypress.env('selectedOption', selectedProductAutoCompleteHomePage)
        cy.get($lastItem).click(); 
    });
  })
}

static clickCreatAnAccountButton(){
  cy.wait(3000)
  cy.get(HomeElements.CREAT_AN_ACCOUNT_BUTTON).should('be.visible').click();
}

static clickMenOption(){
  cy.wait(3000)
  cy.get(HomeElements.SELECT_MEN_OPTION).should('be.visible').click();
}
}
export default HomeActions;