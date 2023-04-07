import React, { useState } from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "redux/features/userSlice";

import "styles/components/forms/user-form.scss";

/**
 * User Form Component
 * @param {Function} toggleUserForm Function for display/hide user form
 * @returns {React.ReactElement}
 */
function UserForm({ toggleUserForm }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { firstName, lastName } = useSelector((state) => state.user);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Firstname must be at least 2 characters")
      .required("Firstname required !"),
    lastname: Yup.string()
      .min(2, "Lastname must be at least 2 characters")
      .required("Lastname required !"),
  });

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        dispatch(updateProfile(formData))
          .unwrap()
          .then(() => {
            setLoading(false);
            toggleUserForm();
            toast.success("Update profile successful !");
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.split(":")[1]);
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.errors.join("\n"));
      });
  };

  return (
    <form className="user-form" onSubmit={handleUpdateUser}>
      <div className="box box-end">
        <input type="text" id="firstname" defaultValue={firstName} />
      </div>

      <div className="box box-start">
        <input type="text" id="lastname" defaultValue={lastName} />
      </div>

      <div className="box box-end">
        <button className="btn">
          {loading ? "Loading..." : "Save"}
        </button>
      </div>

      <div className="box box-start">
        <button className="btn" onClick={() => toggleUserForm()}>
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
