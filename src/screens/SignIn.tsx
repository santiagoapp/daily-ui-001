import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import google from "../assets/icons/google.svg";
import apple from "../assets/icons/apple.svg";

const SignIn = () => {
  return (
    <div className="Signin">
      <Link to="/">
        <div className="Signin__goback">
          <div className="Signin__goback-icon">
            <FontAwesomeIcon icon={solid("chevron-left")} />
          </div>
          <span className="Signin__goback-text">Back</span>
        </div>
      </Link>
      <div className="Signin__block">
        <h1 className="Signin__title">Welcome back</h1>
        <div className="Signin__form-block">
          <form>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="Signin__form-remember">
              <div className="form-input row-reverse">
                <label htmlFor="agreement">Remember me</label>
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="Signin__buttons-block">
              <Link to="/sign-in" className="Signin__signin-link">
                <button className="Signin__signin-button">Sign in</button>
              </Link>
            </div>
            <div className="Signin__social-media-block">
              <div className="Signin__special-text">
                <span>Sign in with</span>
              </div>
              <div className="Signin__social-media-icons">
                <img src={facebook} className="social-logo" alt="logo" />
                <img src={twitter} className="social-logo" alt="logo" />
                <img src={google} className="social-logo" alt="logo" />
                <img src={apple} className="social-logo" alt="logo" />
              </div>
              <div className="Signin__disclamer">
                <span>
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="Signin__signin-link">
                    <span className="text-highlight">Sign up</span>
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
