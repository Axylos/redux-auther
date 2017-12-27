import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from '../containers/RootReducer';
import DevTools from '../components/utils/DevTools';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const histMiddleWare = routerMiddleware(history);

const store = createStore(
  rootReducer,
  DevTools.instrument(),
  applyMiddleware(histMiddleWare)
);

export default {
  store,
  history,
  DevTools
};
