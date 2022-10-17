import * as Yup from "yup";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { login } from "redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import "styles/components/forms/login-form.scss";

/**
 * Login Form Component
 * @returns {React.ReactElement}
 */
function LoginForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email not valid !").required("Email required !"),
    password: Yup.string().required("Password required !"),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        dispatch(login(formData))
          .unwrap()
          .then(() => {
            navigate("/profile");
            toast.success("Login successful !");
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.split(":")[1]);
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.errors.join('\n'));
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
