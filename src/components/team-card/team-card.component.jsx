import React from "react";
import "./team-card.style.scss?v=0.0.1";

const TeamCard = ({
  photoURL,
  displayName,
  position,
  linkedinURL,
  gradYear,
}) => (
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
        {gradYear ? (
          <div className="graduation-year">Graduating {gradYear}</div>
        ) : null}
        {linkedinURL ? (
          <a href={linkedinURL} className="linkedin links" target="_blank" rel="noopener noreferrer">
            Visit Profile <i class="fab fa-linkedin"></i>
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

export default TeamCard;
