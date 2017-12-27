import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import PrivateRoute from './utils/PrivateRoute';
// import { Home, Auth } from './containers/index';
import Home from './containers/Home';
import Auth from './containers/Auth/Auth';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const App = (props) => 
  <div>
    <pre>({JSON.stringify(props)})</pre>
    <ConnectedSwitch>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
    </ConnectedSwitch>
  </div>

export default connect(state => ({
  location: state.location,
}))(App);
