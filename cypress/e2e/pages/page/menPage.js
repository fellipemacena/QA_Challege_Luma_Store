import MenActions from '../page_actions/menActions';

export class MenPage {
  
  static validateMenPage() {
    MenActions.validateMenPage();
  }

  static selectHoodiesAndSweatShirts() {
    MenActions.selectHoodiesAndSweatShirts();
  }

  static selectRandomProduct() {
    MenActions.selectRandomProduct();
  }

  static productComment() {
    MenActions.productComment();
  }

  static addToCartMenProduct() {
    MenActions.addToCartMenProduct();
  }
  

}

export default  MenPage;