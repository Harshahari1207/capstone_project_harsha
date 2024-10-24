import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const EditProfileForm = ({user, handleClose }) => {
  const [userForm, setUserForm] = useState({
    username: user.username,
    description: user.description,
    password: user.password,
    address: user.address,
  });
  console.log(user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", user);
    try {
      
      handleClose();
    } catch(error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="editprofile-form-container">
      <div className="card editprofile-form p-4 w-50 position-relative">
        <button className="close-btn" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={userForm.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={userForm.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">
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
            <label htmlFor="availability" className="form-label">
              Availability
            </label>
            <input
              type="address"
              id="address"
              name="address"
              className="form-control"
              value={userForm.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;