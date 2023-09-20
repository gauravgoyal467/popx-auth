import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="home-container">
      <h2>Welcome to PopX</h2>
      <div>
        <p>Lorem ipsum, dolor sit amet,</p>
        <p>consectetur adipisicing elit,</p>
      </div>
      <div className="button">
        <Link to="/signUp">
          <button className="signUp-btn btn">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="login-btn btn">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
