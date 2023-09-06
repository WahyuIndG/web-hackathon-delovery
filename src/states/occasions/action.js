// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_OCCASIONS: 'RECEIVE_OCCASION',
};

function receiveOccasionsActionCrator(occasions) {
  return {
    type: ActionType.RECEIVE_OCCASIONS,
    payload: {
      occasions,
    },
  };
}

// THUNK

// dipanggil di useEffect (OccasionPage.jsx)
function asyncReceiveOccasions() {
  return async (dispatch) => {
    try {
      const occasions = await api.getAllOccasions();
      dispatch(receiveOccasionsActionCrator(occasions));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
  };
}

export { ActionType, receiveOccasionsActionCrator, asyncReceiveOccasions };
