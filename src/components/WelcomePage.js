import React from "react";
import { Link } from 'react-router-dom';

import "./WelcomePage.css";

function WelcomePage() {
  return (
    <div className="container">
      <h1 className="welcome-heading">Welcome to Popx</h1>
      <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/signup" className="btn-create">Create Account</Link>
      <Link to="/signin" className="btn-sign-in">Already Registered? login</Link>
    </div>
  );
}

export default WelcomePage;
