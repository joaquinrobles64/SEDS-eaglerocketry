import React from "react";
import "./team-card.style.scss";

export const TeamCard = ({ imageUrl, desc, name, position }) => {
  <div>
    <img src={imageUrl} alt={desc} />
    <p>{name}</p>
    <p>{position}</p>
  </div>;
};

export default TeamCard;
