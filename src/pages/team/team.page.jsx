import React from "react";

import "./team.style.scss";
import TEAM_DATA from "./team.data";

import { TeamCardList } from "../../components/team-card-list/team-card-list.component";
class TeamPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: TEAM_DATA,
    };
  }

  render() {
    const { team } = this.state;
    return (
      <div className="team-page">
        <TeamCardList>
          {this.state.team.map((member) => (
            <div key={member.id}>
              <img src={member.imageUrl} alt="" />
              <h1> {member.name} </h1>
              <h3>{member.position}</h3>
            </div>
          ))}
        </TeamCardList>
      </div>
    );
  }
}

export default TeamPage;
