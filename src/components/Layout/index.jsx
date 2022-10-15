import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

/**
 * Layout component for the app
 * @param {React.ReactNode} children 
 * @returns {React.ReactElement}
 */
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
