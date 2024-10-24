import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const EditProfileForm = ({ user, handleClose }) => {
  const [userForm, setUserForm] = useState({
    username: user.username,
    password: user.password,
    address: user.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", userForm);
    try {
      const response = await axios.put(
        `http://localhost:8081/user/${user.userId}`,
        userForm
      );
      console.log(response);
      handleClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="editprofile-form-container">
      <div className="card editprofile-form p-4 w-50 position-relative">
        <button className="close-btn" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={userForm.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={userForm.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              value={userForm.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
