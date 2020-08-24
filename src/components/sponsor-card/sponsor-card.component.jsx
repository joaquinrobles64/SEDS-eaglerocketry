import React from "react";

import "./sponsor-card.style.scss";

const SponsorCard = ({ imageUrl, link, desc }) => (
  <div className="sponsor-card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={desc} />
    </a>
  </div>
);

export default SponsorCard;
