import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import citiesReducer from './cities/reducer';
import occasionsReducer from './occasions/reducer';
import productDetailReducer from './productDetail/reducer';
import productsReducer from './products/reducer';
import recomProductsReducer from './recomProducts/reducer';
import severalOccasionsReducer from './severalOccasions/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    cities: citiesReducer,
    occasions: occasionsReducer,
    productDetail: productDetailReducer,
    products: productsReducer,
    recomProducts: recomProductsReducer,
    severalOccasions: severalOccasionsReducer,
  },
});

export default store;
