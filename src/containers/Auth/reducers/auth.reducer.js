import * as actions from '../actions/auth.actions';
import * as actionTypes from '../actions/auth.types';

const initialState = {
  isAuthenticated: false,
  isLoading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      }
    case actionTypes.AUTH_VALIDATE:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
};

export default authReducer;
