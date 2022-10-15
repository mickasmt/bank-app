import React from "react";
import { Link } from "react-router-dom";
import "styles/components/forms/login-form.scss"


/**
 * Login Form Component
 * @returns {React.ReactElement}
 */
function LoginForm() {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        {/* <button className="sign-in-button">Sign In</button> */}
        <Link to="/profile" className="sign-in-button">Sign In</Link>
      </form>
    </section>
  );
}

export default LoginForm;
