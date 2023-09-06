import { ActionType } from './action';

function productDetailReducer(productDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCT_DETAIL:
      return action.payload.productDetail;
    case ActionType.CLEAR_PRODUCT_DETAIL:
      return null;
    default:
      return productDetail;
  }
}

export default productDetailReducer;
