import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import PrivateRoute from './utils/PrivateRoute';
// import { Home, Auth } from './containers/index';
import Home from './containers/Home';
import Auth from './containers/Auth/Auth';
import { Link } from 'react-router-dom';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const App = (props) => 
  <div>
    <ConnectedSwitch>
      <PrivateRoute exact path="/" component={Home} location={props.location} />
      <Route path="/auth" component={Auth} location={props.location} />
    </ConnectedSwitch>
  </div>

export default connect(state => ({
  location: state.routerReducer.location,
}))(App);
