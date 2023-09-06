/*
receiveProductsActionCreator(products)         Digunakan saat  halaman produk/    
receiveProductsByOccasion(product)             Digunakan saat  halaman occasion/wisuda/
receiveFilteredProductsActionCreator(products)
asyncReceiveProducts()
asyncReceiveProductsByOccasion()
asyncReceiveFilteredProducts(cityId) => dibuat percabangan kalo cityId == 1 pake API  getProductsByCity(cityId)
                                                           kalo cityId == ‘’ pake API getAllProducts()
*/

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
    try {
      const products = await api.getAllProducts();
      dispatch(receiveAllProductsActionCreator(products));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
  };
}

// dipanggil di useEffect() (ProductByOccasionPage.jsx)
function asyncReceiveFilteredProductsByOccasion(occasionId) {
  return async (dispatch) => {
    try {
      const products = await api.getProductsByOccasion(occasionId);
      dispatch(receiveFilteredProductsByOccasionActionCreator(products));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
  };
}

// dipanggil saat onCityChange() (ProductPage.jsx, ProductByOccasionPage.jsx)
function asyncReceiveFilteredProductsByCity(cityId) {
  return async (dispatch) => {
    try {
      if (cityId === 'all') {
        const products = await api.getAllProducts();
        dispatch(receiveFilteredProductsByCityActionCreator(products));
      } else {
        const products = await api.getProductsByCity(cityId);
        dispatch(receiveFilteredProductsByCityActionCreator(products));
      }
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
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
