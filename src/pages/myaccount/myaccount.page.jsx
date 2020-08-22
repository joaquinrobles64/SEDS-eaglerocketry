import React from "react";

import UpdateInfo from "../../components/update-info/update-info.component";
import "./myaccount.style.scss";
const MyAccountPage = () => (
  <div className="my-account">
    <h2 className="title">Edit Account Information</h2>
    <UpdateInfo />
  </div>
);

export default MyAccountPage;
