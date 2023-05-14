import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="container">
      <h1 className="signin-heading">Signin to your PopX account</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form>
        <div className="input-group">
          <label htmlFor="emailAddress">
            Email Address
          </label>
          <input type="email" id="emailAddress" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            Password
          </label>
          <input type="password" id="password" required />
        </div>
        <Link to='/user' className="btn-login" type="submit">
          Login
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
