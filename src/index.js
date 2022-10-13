import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "styles/main.scss";

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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
