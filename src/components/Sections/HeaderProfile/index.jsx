import React, { useState } from "react";
import UserForm from "components/Forms/UserForm";
import { useSelector } from "react-redux";

/**
 * Header Profile component. Contains UserForm
 * @returns {React.ReactElement}
 */
function HeaderProfile() {
  const [showUserForm, setShowUserForm] = useState(false);

  const { firstName, lastName } = useSelector((state) => state.user);


  const toggleUserForm = () => {
    setShowUserForm(!showUserForm);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName} !
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
