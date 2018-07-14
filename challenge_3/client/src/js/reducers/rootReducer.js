import Redux from 'redux';
import { CHANGE_SCORE } from '../actions/actionTypes.js'

var rootReducer = (state = 0, action) => {

  switch (action.type) {
    case CHANGE_SCORE:
      return state + action.payload.userScore
    default: 
      return state;
  }
};

export default rootReducer;
