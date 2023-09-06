import { ActionType } from './action';

function productsReducer(products = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ALL_PRODUCTS:
      return action.payload.products;
    case ActionType.RECEIVE_FILTERED_PRODUCTS_BY_OCCASION:
      return action.payload.products;
    case ActionType.RECEIVE_FILTERED_PRODUCTS_BY_CITY:
      return action.payload.products;
    default:
      return products;
  }
}

export default productsReducer;
