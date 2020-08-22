import React from "react";

import UpdateInfo from "../../components/update-info/update-info.component";
import UpdateProfilePicture from "../../components/update-profile-picture/update-profile-picture.component";
import "./myaccount.style.scss";
const MyAccountPage = () => (
  <div className="my-account">
    <h2 className="title">Edit Account Information</h2>
    <div className="container">
    <UpdateInfo />
    <UpdateProfilePicture />
    </div>
   
  </div>
);

export default MyAccountPage;
