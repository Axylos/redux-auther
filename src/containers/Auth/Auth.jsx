import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div>
      <h3><Link to="/register">Sign Up</Link></h3>
      <h3><Link to="/login">Log In</Link></h3>
    </div>
  );
}
