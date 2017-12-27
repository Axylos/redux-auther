import authReducer from './Auth/reducers/auth.reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const RootReducer = combineReducers({
  authReducer,
  routerReducer
});
export default RootReducer;
