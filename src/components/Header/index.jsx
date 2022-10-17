import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "redux/features/authSlice";

import "styles/components/header.scss";
import logo from "assets/img/argentBankLogo.png";

/**
 * Header Component
 * @returns {React.ReactElement}
 */
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { firstName } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(logout()).then(() => {
      navigate("/");
    });
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div className="main-nav-links">
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>

            <Link className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Logout
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
