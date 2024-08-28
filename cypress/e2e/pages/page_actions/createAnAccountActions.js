import CreateAnAccountElements from "../page_elements/createAnAccountElemets";

export class CreateAnAccountActions {
  
  static createNewUserWithRandomData() {
    // Requisição à API RandomUser para obter dados fictícios através do site ramdomuser
    cy.request("https://randomuser.me/api/").then((response) => {
      // Extração de dados da resposta
      const user = response.body.results[0];
      const firstName = user.name.first;
      const lastName = user.name.last;
      const email = user.email;
      const password = 'Qazaq123!'; 

      // Preenchendo os campos do formulário com dados fictícios
      this.enterFirstNameField(firstName);
      this.enterLastNameField(lastName);
      this.enterEmail(email);
      this.enterPassword(password);
      this.enterConfirmPassword(password);
    });
  }

  static validateCreateNewCustomerAccountPage() {
    cy.get(CreateAnAccountElements.ELEMENT_REFERENCE_PAGE).should("be.visible").should("have.text", "Create New Customer Account");
  }

  static enterFirstNameField(firstName) {
    cy.get(CreateAnAccountElements.FIRST_NAME_FIELD).should("be.visible").clear().type(firstName).should("have.value", firstName);
  }

  static enterLastNameField(lastName) {
    cy.get(CreateAnAccountElements.LAST_NAME_FIELD).should("be.visible").clear().type(lastName).should("have.value", lastName);
  }

  static enterEmail(email) {
    cy.get(CreateAnAccountElements.EMAIL_FIELD).should("be.visible").clear().type(email).should("have.value", email);
  }

  static enterPassword(password) {
    cy.get(CreateAnAccountElements.PASSWORD_FIELD).should("be.visible").clear().type(password).should("have.value", password);
  }

  static enterConfirmPassword(password) {
    cy.get(CreateAnAccountElements.CONFIRM_PASSWORD_FIELD).should("be.visible").clear().type(password).should("have.value", password);
  }

  static clickCreateAnAccountButton() {
    cy.wait(2000);
    cy.get(CreateAnAccountElements.CREAT_AN_COUNT_BUTTON).should("be.visible").click();
  }

  static validateMyAccountPage(){
    cy.wait(2000);
    cy.get(CreateAnAccountElements.MY_ACCOUNT_REFERENCE).should("be.visible").should("have.text","My Account");
  }

  static returnHomePageFromMyAccountPage(){
    cy.wait(2000);
    cy.get(CreateAnAccountElements.HOME_PAGE_LINK_MY_ACCOUNT_PAGE).should("be.visible").click();
  } 
}

export default CreateAnAccountActions;
