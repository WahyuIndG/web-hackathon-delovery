import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_ALL_PRODUCTS: 'RECEIVE_ALL_PRODUCTS',
  RECEIVE_FILTERED_PRODUCTS_BY_OCCASION: 'RECEIVE_FILTERED_PRODUCTS_BY_OCCASION',
  RECEIVE_FILTERED_PRODUCTS_BY_CITY: 'RECEIVE_FILTERED_PRODUCTS_BY_CITY',
};

function receiveAllProductsActionCreator(products) {
  return {
    type: ActionType.RECEIVE_ALL_PRODUCTS,
    payload: {
      products,
    },
  };
}

function receiveFilteredProductsByOccasionActionCreator(products) {
  return {
    type: ActionType.RECEIVE_FILTERED_PRODUCTS_BY_OCCASION,
    payload: {
      products,
    },
  };
}

function receiveFilteredProductsByCityActionCreator(products) {
  return {
    type: ActionType.RECEIVE_FILTERED_PRODUCTS_BY_CITY,
    payload: {
      products,
    },
  };
}

// THUNK

// dipanggil di useEffect() (ProductPage.jsx, ProductByOccasion.jsx)
function asyncReceiveAllProducts() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const products = await api.getAllProducts();
      dispatch(receiveAllProductsActionCreator(products));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }

    dispatch(hideLoading());
  };
}

// dipanggil di useEffect() (ProductByOccasionPage.jsx)
function asyncReceiveFilteredProductsByOccasion(occasionId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const products = await api.getProductsByOccasion(occasionId);
      dispatch(receiveFilteredProductsByOccasionActionCreator(products));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }

    dispatch(hideLoading());
  };
}

// dipanggil saat onCityChange() (ProductPage.jsx, ProductByOccasionPage.jsx)
function asyncReceiveFilteredProductsByCity(cityId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      if (cityId === 'all') {
        const products = await api.getAllProducts();
        console.log(products);
        dispatch(receiveFilteredProductsByCityActionCreator(products));
      } else {
        const products = await api.getProductsByCity(cityId);
        console.log(products);
        dispatch(receiveFilteredProductsByCityActionCreator(products));
      }
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveAllProductsActionCreator,
  receiveFilteredProductsByCityActionCreator,
  receiveFilteredProductsByOccasionActionCreator,
  asyncReceiveAllProducts,
  asyncReceiveFilteredProductsByCity,
  asyncReceiveFilteredProductsByOccasion,
};
