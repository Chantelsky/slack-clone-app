import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';

const initalUserState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...initalUserState,
        isLoading: false,
      };
    default:
      return initalUserState;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
});

export default rootReducer;
