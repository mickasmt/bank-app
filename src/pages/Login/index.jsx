import React, { useEffect } from "react";
import LoginForm from "components/Forms/LoginForm";

/**
 * Login Page
 * @returns {React.ReactElement}
 */
function Login() {
  useEffect(() => {
    document.title = "Login Page | ArgentBank";
  }, []);

  return (
    <main className="main bg-dark">
      <LoginForm />
    </main>
  );
}

export default Login;
