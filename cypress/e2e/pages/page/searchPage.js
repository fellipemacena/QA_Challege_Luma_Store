import SearchActions from '../page_actions/searchActions';

export class SearchPage {
  
  static backToHomePage() {
    SearchActions.backToHomePage();
  }

  static validateSearchResults() {
    SearchActions.validateSearchResults();
  }

  static selectFirstProduct() {
    SearchActions.selectFirstProduct();
  }

}

export default  SearchPage;