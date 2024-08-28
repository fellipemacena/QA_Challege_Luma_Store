import CreateAnAccountActions from '../page_actions/createAnAccountActions';

export class CreateAnAccountPage {
  static validateCreateNewCustomerAccountPage() {
    CreateAnAccountActions.validateCreateNewCustomerAccountPage();
  }
  static createNewUserWithRandomData() {
    CreateAnAccountActions.createNewUserWithRandomData();
  }
  
    static clickCreateAnAccountButton() {
    CreateAnAccountActions.clickCreateAnAccountButton();
  }
  
  static validateMyAccountPage() {
    CreateAnAccountActions.validateMyAccountPage();
  }

  static returnHomePageFromMyAccountPage() {
    CreateAnAccountActions.returnHomePageFromMyAccountPage();
  }
  
  


}

export default CreateAnAccountPage;