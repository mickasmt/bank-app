import React from "react";
import PropTypes from "prop-types";
import "styles/components/forms/user-form.scss";

/**
 * User Form Component
 * @param {Function} toggleUserForm Function for display/hide user form
 * @returns {React.ReactElement}
 */
function UserForm({ toggleUserForm }) {
  return (
    <form className="user-form">
      <div className="inputContainer">
        <div className="input-wrapper">
          <input type="text" id="username" />
        </div>

        <div className="input-wrapper">
          <input type="password" id="password" />
        </div>
      </div>

      <div className="user-form-buttons">
        <button className="user-form-button">Save</button>
        <button className="user-form-button" onClick={() => toggleUserForm()}>
          Cancel
        </button>
      </div>
    </form>
  );
}

UserForm.propTypes = {
  /** Function for display/hide user form */
  toggleUserForm: PropTypes.func.isRequired,
};

export default UserForm;
