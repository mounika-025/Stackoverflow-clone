import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../assests/icon.png";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import { login, signup } from "../../actions/auth";

const Auth = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    setIsSignedUp(!isSignedUp);
  };

  const handleValueSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please enter your email and password");
    }
    if (isSignedUp) {
      if (!name) {
        alert("Please enter a name ");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ name, email, password }, navigate));
    }
    console.log({ name, email, password });
  };
  return (
    <section className="auth-page-section">
      {isSignedUp && <AboutAuth />}
      <div className="auth-container">
        {!isSignedUp && (
          <img src={icon} alt="stack-overflow" className="login-icon" />
        )}
        <form onSubmit={handleValueSubmit}>
          {isSignedUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div className="password-container">
              <h4>Password</h4>
              {!isSignedUp && (
                <p
                  style={{
                    color: "#007ac6",
                    fontSize: "13px",
                    textAlign: "end",
                  }}
                >
                  Forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignedUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must have at least 8 characters, <br />
                contain at least two of the following: uppercase letters,
                lowercase letters,
                <br /> numbers, and symbols.
              </p>
            )}
          </label>
          {/* {isSignedUp && (<label htmlFor="check"><input type="checkbox" id="check"/></label>)} */}
          <button type="submit" className="auth-button">
            {isSignedUp ? "Sign Up" : "Login"}
          </button>
          {isSignedUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign Up", you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}>privacy policy</span> and
              <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignedUp ? "Already have an account?" : "Create a new account"}
          <button
            type="button"
            className="auth-handle-btn"
            onClick={handleAuth}
          >
            {isSignedUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
