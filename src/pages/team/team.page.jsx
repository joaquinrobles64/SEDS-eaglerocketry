import React from "react";

import "./team.style.scss";
import { userCollection as TEAM_DATA } from "../../firebase/firebase.util";

import { TeamCardList } from "../../components/team-card-list/team-card-list.component";
class TeamPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: TEAM_DATA,
    };
  }

  render() {
    return (
      <div className="team-page">
        <div className="team">Meet The Team</div>
        <TeamCardList>
          {this.state.team.map((member) => (
            <div key={member.id}>
              <img src={member.photoURL} alt="" className="cropper" />
              <div className="text-center">
                <h3> {member.displayName} </h3>
                <h4>{member.position}</h4>
              </div>
            </div>
          ))}
        </TeamCardList>
      </div>
    );
  }
}

export default TeamPage;
