import api from '../../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_SEVERAL_OCCASIONS: `RECEIVE_SEVERAL_OCCASIONS`,
};

function receiveSeveralOccasionsActionCreator(severalOccasions) {
  return {
    type: ActionType.RECEIVE_SEVERAL_OCCASIONS,
    payload: {
      severalOccasions,
    },
  };
}

// THUNK

// dpanggil di useEffect (Home.jsx)
function asyncReceiveSeveralOccasions() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const severalOccasions = await api.getSeveralOccasions();
      dispatch(receiveSeveralOccasionsActionCreator(severalOccasions));
    } catch (error) {
      alert('failed to fetch | error : ' + error);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveSeveralOccasionsActionCreator, asyncReceiveSeveralOccasions };
