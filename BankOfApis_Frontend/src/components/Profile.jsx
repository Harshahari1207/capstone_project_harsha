import React from "react";
import EditProfileForm from "./EditProfileForm";
import { useState } from "react";
const ProfileBox = ({ user }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleCloseForm = () => {
    console.log("Form closed");
    setIsFormVisible(!isFormVisible);
  };
  return (
    <>
      {isFormVisible && <EditProfileForm user={user} handleClose={handleCloseForm} />}
      <div className="home d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/675/374/small_2x/man-avatar-image-for-profile-png.png"
            className="card-img-top rounded-circle mx-auto"
            alt="Profile"
            style={{ width: "150px", height: "150px" }}
          />
          <div className="card-body">
            <h5 className="card-title">User Name: {user.username}</h5>
            <p className="card-text">
              This is a simple description about the user.
            </p>
            <p>Password: {user.password}</p>
            <p>Address: {user.address}</p>
          </div>
          <button className="btn btn-primary" onClick={handleCloseForm}>
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
