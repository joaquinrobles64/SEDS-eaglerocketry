import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateUserProfileDocument, auth } from "../../firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./update-info.style.scss";

class UpdateInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: this.props.currentUser.displayName
        ? this.props.currentUser.displayName
        : "",
      gradYear: this.props.currentUser.gradYear
        ? this.props.currentUser.gradYear
        : "",
      position: this.props.currentUser.position
        ? this.props.currentUser.position
        : "",
      subTeam: this.props.currentUser.subTeam
        ? this.props.currentUser.subTeam
        : "",
      linkedinUrl: this.props.currentUser.linkedinUrl
        ? this.props.currentUser.linkedinUrl
        : "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const isVerified = this.props.currentUser.isVerified;
    const user = auth.currentUser;

    const {
      displayName,
      gradYear,
      position,
      subTeam,
      linkedinUrl,
    } = this.state;

    if (user && isVerified) {
      try {
        await updateUserProfileDocument(user, {
          displayName,
          gradYear,
          position,
          subTeam,
          linkedinUrl,
        });
        alert("successfully update");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Account Not Verified By Admin");
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="update-info">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            type="text"
            name="gradYear"
            value={this.state.gradYear}
            handleChange={this.handleChange}
            label="Graduation Year"
          />
          <FormInput
            type="text"
            name="position"
            value={this.state.position}
            handleChange={this.handleChange}
            label="Position"
          />
          <label className="sub-team-title" for="subTeam">
            Choose your Sub-Team:{" "}
          </label>
          <select
            name="subTeam"
            className="sub-team"
            value={this.state.subTeam}
            onChange={this.handleChange}
          >
            <option value="Cyber Team">Cyber Team</option>
            <option value="Payload Team">Payload Team</option>
            <option value="Fuselage Team">Fuselage Team</option>
            <option value="Electrical Team">Electrical Team</option>
            <option value="Propulsion Team">Propulsion Team</option>
            <option value="Other">Other</option>
          </select>
          <FormInput
            type="url"
            name="linkedinUrl"
            value={this.state.linkedinUrl}
            handleChange={this.handleChange}
            label="Linkedin Url"
          />
          <div className="buttons">
            <CustomButton type="submit" inverted>
              UPDATE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UpdateInfo);
