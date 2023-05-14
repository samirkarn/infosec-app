import React from "react";
import "./User.css";

function User() {
  return (
    <div className="container">
      <div className="header">
        <h5 className="title">Account Settings</h5>
      </div>
      <div className="profile-container">
        <div className="profile-picture">
        </div>
        <div className="camera-picture">
        </div>
        <div className="profile-info">
          <p className="person-name">Marry Doe</p>
          <p className="email">Marry@Gmail.com</p>
        </div>
      </div>
      <div className="content">
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
    </div>
  );
}

export default User;
