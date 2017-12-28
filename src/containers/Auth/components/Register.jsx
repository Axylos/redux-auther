import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth.actions';

const handleSubmit = (validateAuth, e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  validateAuth(data);
}

const Register = (props) => {
  return (
    <form onSubmit={handleSubmit.bind(null, props.validateAuth)}>
      <h2>Register</h2>
      <label htmlFor="username">User Name:</label>
        <input name="username" id="username" type="text" />
      <br />
      <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      <button>Finish!</button>
    </form>
  )
}

export default connect(state => ({}),
  { 
    rejectAuth: actions.rejectAuth,
    validateAuth: actions.validateAuth 
  },
)(Register);
