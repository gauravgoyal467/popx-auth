import React from "react";
import "./style.css";
import lady from "../../assets/ladyPic.png";
import camera from "../../assets/camera.png";
import { getSignedUser } from "../../functions/getSignedUser";

const Profile = () => {
  const userData = getSignedUser();
  return (
    <div className="profile-container">
      <div className="top-section">
        <p>Account Settings</p>
      </div>
      <div className="bottom-section">
        <div className="top">
          <div className="image">
            <img src={lady} alt="" />
            <img className="cam" src={camera} alt="" />
          </div>
          <div className="intro">
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium impedit harum eaque ratione corporis facilis doloremque vitae alias </p>
      </div>
      <div className="dashed"></div>
    </div>
  );
};

export default Profile;
