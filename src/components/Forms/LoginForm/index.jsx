import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import "styles/components/forms/login-form.scss";
import { clearMessage } from "redux/features/messageSlice";
import { login } from "redux/features/authSlice";

/**
 * Login Form Component
 * @returns {React.ReactElement}
 */
function LoginForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  // const message = useSelector((state) => console.log(state.message));
  // console.log(message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Entrer une adresse mail valide !")
      .required("Une adresse mail est requise !"),
    password: Yup.string().required("Un mot de passe est requis !"),
  });

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    validationSchema
      .validate(formData)
      .then(() => {
        // console.log(valid);
        dispatch(login(formData))
          .unwrap()
          .then(() => {
            navigate("/profile");
            // window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      })
      .catch((err) => {
        console.error(err);
        // throw Error(err);
      });
  };
  
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {/* {message && <div>{message}</div>} */}

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
          {loading ? "Chargement..." : "Sign In"}
        </button>
        {/* <Link to="/profile" className="sign-in-button">Sign In</Link> */}
      </form>
    </section>
  );
}

export default LoginForm;
