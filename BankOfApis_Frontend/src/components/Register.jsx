import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containsSpecialCharacter = (password) => {
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];
    return specialChars.some(char => password.includes(char));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    if (formData.password !== formData.confirmPassword || formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long/Passwords do not match. Please try again.');
      return;
    }
    if (!containsSpecialCharacter(formData.password)) {
      setErrorMessage('Password must contain at least one special character.');
      return;
    }

    setErrorMessage('');
    formData.id = Math.floor(Math.random() * 1000);
    const data = {
        userId: Math.floor(Math.random() * 1000),
        username: formData.username,
        password: formData.password,
        address: formData.address
    }
    const response = await axios.post(
      "http://localhost:8081/user/register",
      data
    )
    if(response.status === 201){
      console.log(response)
      history("/login")
    }

  };

  return (
    <div className="home">
      <div className="container pt-5">
        <div className="row justify-content-center ">
          <div className="col-md-6 text-center d-flex align-items-center">
            <div className="">
              <div className="">
                <h3 className="">
                  This Is New Era Money Always In Your Mobile
                </h3>
                <p className="card-text">
                  A platform for banks and financial services providers to
                  connect with their customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Register</h3>
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password*/}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Address */}
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      name="address"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <p>Have registered <a href="/login">Login</a></p>
                  {/* Error Message */}
                  <p className="text-danger">{errorMessage}</p>
                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
