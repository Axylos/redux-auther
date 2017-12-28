import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from '../containers/RootReducer';
import DevTools from '../components/utils/DevTools';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../RootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

const history = createHistory();
const histMiddleWare = routerMiddleware(history);

const store = createStore(
  rootReducer,
  DevTools.instrument(),
  applyMiddleware(
    epicMiddleware,
    histMiddleWare
  )
);

export default {
  store,
  history,
  DevTools
};
