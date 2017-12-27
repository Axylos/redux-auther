import React from 'react';
import ReactDOM from 'react-dom';
import storeUtils from './utils/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';

const { store, history, DevTools } = storeUtils;

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
