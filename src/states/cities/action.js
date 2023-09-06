import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_CITIES: 'RECEIVE_CITIES',
};

function receiveCitiesActionCreator(cities) {
  return {
    type: ActionType.RECEIVE_CITIES,
    payload: {
      cities,
    },
  };
}

// THUNK

// dpanggil di useEffect (ProductPage.jsx, ProductByOccasion.jsx)
function asyncReceiveCities() {
  return async (dispatch) => {
    try {
      const cities = await api.getAllCities();
      dispatch(receiveCitiesActionCreator(cities));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
  };
}

export { ActionType, receiveCitiesActionCreator, asyncReceiveCities };
