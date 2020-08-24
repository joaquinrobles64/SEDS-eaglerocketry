import React from "react";

import "./teampage.style.scss";
import { firestore } from "../../firebase/firebase.util";
import TeamCard from "../../components/team-card/team-card.component";

class TeamPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    firestore
      .collection("users")
      .get()
      .then((users) => {
        users.forEach((user) => {
          if (user.data().isVerified) {
            this.setState((prevState) => ({
              team: [...prevState.team, user.data()],
            }));
          }
        });
      });
  }

  render() {
    return (
      <div className="team-page">
        <h1 className="text-center">Meet the Team</h1>
        <div className="team-members">
          {this.state.team.map((member) => (
            <TeamCard
              photoURL={member.photoURL}
              displayName={member.displayName}
              position={member.position}
              linkedinURL={member.linkedinURL}
              gradYear={member.gradYear}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TeamPage;
