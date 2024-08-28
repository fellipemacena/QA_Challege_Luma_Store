import ProductActions from '../page_actions/productActions';

export class ProductPage {
  
  static selectSize() {
    ProductActions.selectSize();
  }

  static selectColor() {
    ProductActions.selectColor();
  }
  
  static addToCart() {
    ProductActions.addToCart();
  }
  static accessProceedCheckout() {
    ProductActions.accessProceedCheckout();
  }
  

}

export default ProductPage;