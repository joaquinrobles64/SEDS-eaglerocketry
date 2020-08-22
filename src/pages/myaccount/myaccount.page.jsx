import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateUserProfileDocument, auth } from "../../firebase/firebase.util";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./myaccount.style.scss";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.displayName = this.props.currentUser.displayName;

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
      linkedinUrl: this.props.currentUser.linkedinUrl
        ? this.props.currentUser.linkedinUrl
        : "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, gradYear, position, linkedinUrl } = this.state;

    const user = auth.currentUser;

    if (user) {
      try {
        await updateUserProfileDocument(user, {
          displayName,
          gradYear,
          position,
          linkedinUrl,
        });
      } catch (error) {
        console.log(error);
      }
      window.location.reload();
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="my-account">
        <h1 className="title">Welcome back, {this.displayName}!</h1>
        <h2 className="title">Edit Account Information</h2>
        <div className="sign-in">
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
            <FormInput
              type="url"
              name="linkedin"
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
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AccountPage);
