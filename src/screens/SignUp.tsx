import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import google from "../assets/icons/google.svg";
import apple from "../assets/icons/apple.svg";

const SignUp = () => {
  return (
    <div className="Signup">
      <Link to="/">
        <div className="Signup__goback">
          <div className="Signup__goback-icon">
            <FontAwesomeIcon icon={solid("chevron-left")} />
          </div>
          <span className="Signup__goback-text">Back</span>
        </div>
      </Link>
      <div className="Signup__block">
        <h1 className="Signup__title">Get started</h1>
        <div className="Signup__form-block">
          <form>
            <div className="form-input">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter Full Name"
              />
            </div>
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
            <div className="form-input row-reverse">
              <label htmlFor="agreement">
                I agree to processing of{" "}
                <span className="text-highlight">Personal data</span>
              </label>
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                placeholder="Enter Password"
              />
            </div>
            <div className="Signup__buttons-block">
              <Link to="/sign-in" className="Signup__signup-link">
                <button className="Signup__signup-button">Sign up</button>
              </Link>
            </div>
            <div className="Signup__social-media-block">
              <div className="Signup__special-text">
                <span>Sign up with</span>
              </div>
              <div className="Signup__social-media-icons">
                <img src={facebook} className="social-logo" alt="logo" />
                <img src={twitter} className="social-logo" alt="logo" />
                <img src={google} className="social-logo" alt="logo" />
                <img src={apple} className="social-logo" alt="logo" />
              </div>
              <div className="Signup__disclamer">
                <span>
                  Already have an account?{" "}
                  <Link to="/sign-in" className="Signup__signup-link">
                    <span className="text-highlight">Sign in</span>
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

export default SignUp;
