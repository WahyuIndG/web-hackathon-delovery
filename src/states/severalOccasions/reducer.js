import { ActionType } from './action';

function severalOccasionsReducer(severalOccasions = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_SEVERAL_OCCASIONS:
      return action.payload.severalOccasions;
    default:
      return severalOccasions;
  }
}

export default severalOccasionsReducer;
