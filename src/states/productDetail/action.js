import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_PRODUCT_DETAIL: 'RECEIVE_PRODUCT_DETAIL',
  CLEAR_PRODUCT_DETAIL: 'CLEAR_PRODUCT_DETAIL',
};

function receiveProductDetailActionCreator(productDetail) {
  return {
    type: ActionType.RECEIVE_PRODUCT_DETAIL,
    payload: {
      productDetail,
    },
  };
}

function clearProductDetailActionCreator() {
  return {
    type: ActionType.CLEAR_PRODUCT_DETAIL,
  };
}

// THUNK

// dpanggil di useEffect (DetailPage.jsx)
function asyncReceiveProductDetail(productId) {
  return async (dispatch) => {
    dispatch(showLoading());

    // clean old value of productDetail before upadate with new value
    dispatch(clearProductDetailActionCreator());

    try {
      const productDetail = await api.getDetailProduct(productId);
      dispatch(receiveProductDetailActionCreator(productDetail));
    } catch (error) {
      console.log(`failed to fetch | error : ${error}`);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveProductDetailActionCreator,
  asyncReceiveProductDetail,
  clearProductDetailActionCreator,
};
