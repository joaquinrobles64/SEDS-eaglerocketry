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
        <div className="team">Meet the team</div>
        <TeamCardList>
          {this.state.team.map((member) => (
            <div key={member.id}>
              <img src={member.imageUrl} alt="" className="cropper" />
              <h3> {member.name} </h3>
              <h4>{member.position}</h4>
            </div>
          ))}
        </TeamCardList>
      </div>
    );
  }
}

export default TeamPage;
