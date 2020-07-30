import React from "react";
import "./team-card-list.style.scss";

export const TeamCardList = (props) => {
  return <div className="team-card-list">{props.children}</div>;
};
