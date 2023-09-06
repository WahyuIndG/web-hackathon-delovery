import { ActionType } from './action';

function citiesReducer(cities = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CITIES:
      return action.payload.cities;

    default:
      return cities;
  }
}

export default citiesReducer;
