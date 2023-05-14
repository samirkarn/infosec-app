import React from "react";
import "./CreateUser.css";
import { Link } from "react-router-dom";

function CreateUser() {
  return (
    <div className="container">
      <h1 className="create-heading">Create your PopX account</h1>
      <form method="post">
        <div className="input-group">
          <label htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input type="text" id="fullName" required />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">
            Phone number<span className="required">*</span>
          </label>
          <input type="tel" id="phoneNumber" required />
        </div>
        <div className="input-group">
          <label htmlFor="emailAddress">
            Email Address<span className="required">*</span>
          </label>
          <input type="email" id="emailAddress" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <input type="password" id="password" required />
        </div>
        <div className="input-group">
          <label htmlFor="companyName">
            Company Name<span className="required">*</span>
          </label>
          <input type="text" id="companyName" required />
        </div>
        <div className="question-container">
          <p className="question">
            Are you an Agency?<span className="required">*</span>
          </p>
          <div className="radio-direction">
            <div>
              <label>
                <input type="radio" name="radioButton" value="yes" required />
                Yes
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="radioButton" value="no" required />
                No
              </label>
            </div>
          </div>
        </div>

        <Link to="/user" className="btn-submit" type="submit">
          Create Account
        </Link>
      </form>
    </div>
  );
}

export default CreateUser;
