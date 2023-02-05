import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="Welcome__block">
        <h1 className="Welcome__title">Welcome Back!</h1>
        <p className="Welcome__description">
          Enter personal details to your employee account
        </p>
      </div>
      <div className="Welcome__buttons-block">
        <Link to="/sign-in" className="Welcome__signin-link">
          <button className="Welcome__signin-button">Sign in</button>
        </Link>
        <Link to="/sign-up" className="Welcome__signin-link">
          <button className="Welcome__signup-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
