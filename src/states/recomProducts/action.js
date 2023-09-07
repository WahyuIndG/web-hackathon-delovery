import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_RECOM_PRODUCTS: `RECEIVE_RECOM_PRODUCTS`,
};

function receiveRecomProductsActionCreator(recomProducts) {
  return {
    type: ActionType.RECEIVE_RECOM_PRODUCTS,
    payload: {
      recomProducts,
    },
  };
}

// THUNK

// dpanggil di useEffect (Home.jsx)
function asyncReceiveRecomProducts() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const recomProducts = await api.getRecomProducts();
      dispatch(receiveRecomProductsActionCreator(recomProducts));
    } catch (error) {
      alert('failed to fetch | error : ' + error);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveRecomProductsActionCreator, asyncReceiveRecomProducts };
