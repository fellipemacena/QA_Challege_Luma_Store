export const CheckoutElements = {

  SHIPPING_CHECKOUT_ELEMENT:'#shipping > .step-title',


EMAIL_FIELDS:'#customer-email-fieldset > .required > .control > #customer-email',
FIRST_NAME_FIELD:'input[name="firstname"]',
LAST_NAME_FIELD:'input[name="lastname"]',
STREET_ADDRESS_FIELD:'input[name="street[0]"]',
CITY_FIELD:'input[name="city"]',
STATE_PROVINCE_FIELD:'select[name="region_id"]',
ZIP_POSTAL_CODE_FIELD:'input[name="postcode"]',
COUNTRY_FIELD:'select[name="country_id"]',
PHONE_NUMBER:'input[name="telephone"]',
SHIPPHING_METHOD_OPTION:':nth-child(1) > :nth-child(1) > .radio',
NEXT_BUTTON:'.button',
REVIEW_PAYMENT_VALIDATE_PAGE:'._active > span',
PAYMENT_METHOD_CHECKBOX:'#billing-address-same-as-shipping-checkmo',
PLACE_ORDER_BUTTON:'.payment-method-content > :nth-child(4) > div.primary > .action',
FINISH_CHECKOUT_MESSAGE:'.base',
CONTINUE_SHOPPING_BUTTON:'.checkout-success > .actions-toolbar > div.primary > .action > span',

};

export default CheckoutElements;