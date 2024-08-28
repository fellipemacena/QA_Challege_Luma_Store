import CheckoutActions from '../page_actions/checkoutActions';

export class CheckoutPage {

  static validateShippingCheckoutPage() {
    CheckoutActions.validateShippingCheckoutPage();
  }

  static fillCheckoutFormWithRandomData() {
    CheckoutActions.fillCheckoutFormWithRandomData();
  }

  static selectCountry() {
    CheckoutActions.selectCountry();
  }

  static selectStateProvince() {
    CheckoutActions.selectStateProvince();
  }

  static selectRadioShippingMethods() {
    CheckoutActions.selectRadioShippingMethods();
  }

  static selectNextButton() {
    CheckoutActions.selectNextButton();
  }

  static validateReviewPaymentPage() {
    CheckoutActions.validateReviewPaymentPage();
  }

  static clickPaymentMethodCheckBox() {
    CheckoutActions.clickPaymentMethodCheckBox();
  }

  static clickPlaceOrderButton() {
    CheckoutActions.clickPlaceOrderButton();
  }

  static validateFinishCheckoutMessage() {
    CheckoutActions.validateFinishCheckoutMessage();
  }

  static clickContinueShoppingButton() {
    CheckoutActions.clickContinueShoppingButton();
  }
}

export default CheckoutPage;
