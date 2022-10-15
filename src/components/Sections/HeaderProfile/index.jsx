import React, { useState } from "react";
import UserForm from "components/Forms/UserForm";

/**
 * Header Profile component. Contains UserForm
 * @returns {React.ReactElement}
 */
function HeaderProfile() {
  const [showUserForm, setShowUserForm] = useState(false);

  const toggleUserForm = () => {
    setShowUserForm(!showUserForm);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      
      {showUserForm ? (
        <UserForm toggleUserForm={toggleUserForm} />
      ) : (
        <button className="edit-button" onClick={() => toggleUserForm()}>
          Edit Name
        </button>
      )}
    </div>
  );
}

export default HeaderProfile;
