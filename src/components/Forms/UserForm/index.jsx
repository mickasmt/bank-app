import React from "react";
import "styles/components/forms/user-form.scss";

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

export default UserForm;
