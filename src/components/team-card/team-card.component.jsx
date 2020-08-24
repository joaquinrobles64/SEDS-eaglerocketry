import React from "react";
import "./team-card.style.scss?v=0.0.1";

const TeamCard = ({ photoURL, displayName, position }) => (
  <div className="team-card">
    <div className="profile">
      <img
        className="profile-photo"
        src={photoURL ? photoURL : "/images/eagle-rocketry.png"}
        alt="team-member"
      />
      <div className="profile-desc">
        <div className="name">{displayName}</div>
        <div className="position">{position}</div>
      </div>
    </div>
  </div>
);

export default TeamCard;
