import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

// styles
import "styles/main.scss";
import "react-toastify/dist/ReactToastify.css";

// pages
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";

// components
import Error from "components/Error";
import Layout from "components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <ToastContainer position="top-center" autoClose={4000} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>
);
