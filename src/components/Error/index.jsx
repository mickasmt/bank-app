import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/components/error.module.scss";

/**
 * Error component (404 page)
 * @returns {React.ReactElement}
 */
function Error() {
  return (
    <div className={styles.errorContainer}>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;
