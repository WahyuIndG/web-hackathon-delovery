import api from '../../utils/api';

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
    try {
      const severalOccasions = await api.getSeveralOccasions();
      dispatch(receiveSeveralOccasionsActionCreator(severalOccasions));
    } catch (error) {
      alert('failed to fetch | error : ' + error);
    }
  };
}

export { ActionType, receiveSeveralOccasionsActionCreator, asyncReceiveSeveralOccasions };
