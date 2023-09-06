import { ActionType } from './action';

function occasionsReducer(occasions = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_OCCASIONS:
      return action.payload.occasions;
    default:
      return occasions;
  }
}

export default occasionsReducer;
