import { ActionType } from './action';

function recomProductsReducer(recomProducts = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_RECOM_PRODUCTS:
      return action.payload.recomProducts;

    default:
      return recomProducts;
  }
}

export default recomProductsReducer;
