import HomeActions from '../page_actions/homeActions';

export class HomePage {
  static validateHomePage() {
    HomeActions.validateHomePage();
  }

  static validateHotSellers() {
    HomeActions.validateHotSellers();
  }

  static accessProceedCkeckoutButton() {
    HomeActions.accessProceedCkeckoutButton();
  }
  
  static enterProductInSearch(product) {
    HomeActions.enterProductInSearch(product);
  }

  static clickCreatAnAccountButton() {
    HomeActions.clickCreatAnAccountButton();
  }

  static clickMenOption() {
    HomeActions.clickMenOption();
  }

  
}

export default HomePage;