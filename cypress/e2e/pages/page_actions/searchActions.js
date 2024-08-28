import SearchElements from '../page_elements/searchElements';

export class SearchActions {

  static backToHomePage() {
    cy.get(SearchElements.HOME_BUTTON).should('be.visible').click();
  }

  static validateSearchResults() {
    const searchResultText = Cypress.env('selectedOption');
    cy.get(SearchElements.SEARCH_RESULTS).should('contain.text',searchResultText)

  }
  
  static selectFirstProduct(){
    cy.wait(2000)
    cy.get(SearchElements.FIRST_PRODUCT).should('be.visible').click()
  }

}

export default SearchActions;