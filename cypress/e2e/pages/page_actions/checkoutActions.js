import CheckoutElements from '../page_elements/ckeckoutElements';

export class CheckoutActions {

  static fillCheckoutFormWithRandomData() {
    cy.request('https://randomuser.me/api/').then((response) => {
      // Extração de dados da api
      const user = response.body.results[0];
      const firstName = user.name.first;
      const lastName = user.name.last;
      const email = user.email;
      const streetAddress = `${user.location.street.number} ${user.location.street.name}`;
      const city = user.location.city;
      const zipCode = user.location.postcode;
      const phoneNumber = user.phone;
      const country = user.location.country; 
      const state = user.location.state; 

      this.enterEmailAddressField(email); 
      this.enterFirstNameField(firstName); 
      this.enterLastNameField(lastName);
      this.enterStreetAddress(streetAddress); 
      this.enterCityField(city); 
      this.selectCountry(country); 
      this.selectStateProvince(state); 
      this.enterZipCode(zipCode); 
      this.enterPhoneNumber(phoneNumber);
    });
  }

  static validateShippingCheckoutPage() {
    cy.intercept('GET', '/search/ajax/suggest/*').as('getSearchAutoComplete'); 
    cy.wait('@getSearchAutoComplete'); 
    cy.wait(5000);
    cy.get(CheckoutElements.SHIPPING_CHECKOUT_ELEMENT)
      .should('be.visible')
      .should('have.text', 'Shipping Address');
  }

  static enterEmailAddressField(email) {
    cy.wait(1000);
    cy.get(CheckoutElements.EMAIL_FIELDS)
      .should('be.visible')
      .click()
      .clear()
      .type(email)
      .blur();
    cy.get(CheckoutElements.EMAIL_FIELDS)
      .should('have.value', email);
  }

  static enterFirstNameField(firstName) {
    cy.wait(1000);
    cy.get(CheckoutElements.FIRST_NAME_FIELD)
      .should('be.visible')
      .click()
      .clear()
      .type(firstName)
      .should('have.value', firstName);
  }

  static enterLastNameField(lastName) {
    cy.wait(1000);
    cy.get(CheckoutElements.LAST_NAME_FIELD)
      .should('be.visible')
      .click()
      .clear()
      .type(lastName)
      .should('have.value', lastName);
  }

  static enterStreetAddress(streetAddress) {
    cy.wait(1000);
    cy.get(CheckoutElements.STREET_ADDRESS_FIELD)
      .should('be.visible')
      .click()
      .clear()
      .type(streetAddress)
      .should('have.value', streetAddress);
  }

  static selectCountry(country) {
    cy.wait(2000);
    cy.get(CheckoutElements.COUNTRY_FIELD)
      .should('be.visible')
      .select(country)
      .blur();
    cy.get(CheckoutElements.COUNTRY_FIELD)
      .should('contain.text', country);
  }

  static selectStateProvince(state) {
    cy.wait(3000);
    cy.get(CheckoutElements.STATE_PROVINCE_FIELD)
      .should('be.visible')
      .select(state)
      .blur();
    cy.get(CheckoutElements.STATE_PROVINCE_FIELD)
      .should('contain.text', state);
  }

  static enterCityField(city) {
    cy.wait(1000);
    cy.get(CheckoutElements.CITY_FIELD)
      .should('be.visible')
      .click()
      .clear()
      .type(city)
      .should('have.value', city);
  }

  static enterZipCode(zipCode) {
    cy.wait(1000);
    cy.get(CheckoutElements.ZIP_POSTAL_CODE_FIELD)
      .should('be.visible')
      .click()
      .clear()
      .type(zipCode)
      .should('have.value', zipCode);
  }

  static enterPhoneNumber(phoneNumber) {
    cy.wait(1000); 
    cy.get(CheckoutElements.PHONE_NUMBER)
      .should('be.visible')
      .click()
      .clear()
      .type(phoneNumber)
      .should('have.value', phoneNumber);
  }

  static selectRadioShippingMethods() {
    cy.wait(1000);
    cy.get(CheckoutElements.SHIPPHING_METHOD_OPTION)
      .should('be.visible')
      .click();
  }

  static selectNextButton() {
    cy.wait(1000);
    cy.get(CheckoutElements.NEXT_BUTTON)
      .should('be.visible')
      .click();
  }

  static validateReviewPaymentPage() {
    cy.wait(2000);
    cy.get(CheckoutElements.REVIEW_PAYMENT_VALIDATE_PAGE)
      .should('be.visible')
      .should('have.text', 'Review & Payments');
  }

  static clickPaymentMethodCheckBox() {
    cy.wait(1000);
    cy.get(CheckoutElements.PAYMENT_METHOD_CHECKBOX)
      .should('be.visible')
      .click();
  }

  static clickPlaceOrderButton() {
    cy.wait(1000);
    cy.get(CheckoutElements.PLACE_ORDER_BUTTON)
      .should('be.visible')
      .click();
    cy.wait(2000);
  }

  static validateFinishCheckoutMessage() {
    cy.wait(2000);
    cy.get(CheckoutElements.FINISH_CHECKOUT_MESSAGE)
      .should('be.visible')
      .should('contain.text', 'Thank you for your purchase!');
  }

  static clickContinueShoppingButton() {
    cy.wait(2000);
    cy.get(CheckoutElements.CONTINUE_SHOPPING_BUTTON)
      .should('be.visible')
      .click();
  }
}

export default CheckoutActions;
