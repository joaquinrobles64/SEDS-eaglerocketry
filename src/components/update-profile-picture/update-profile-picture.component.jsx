import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateUserProfilePicture, auth } from "../../firebase/firebase.util";

import CustomButton from "../custom-button/custom-button.component";
import "./update-profile-picture.style.scss";

class UpdateProfilePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileImage: null,
      displayName: this.props.currentUser.displayName,
      userProfileImage: this.props.currentUser.imageUrl,
    };
  }

  handleUpload = async (event) => {
    event.preventDefault();
    const isVerified = this.props.currentUser.isVerified;
    const user = auth.currentUser;
    const file = this.state.profileImage;

    if (user && isVerified) {
      try {
        await updateUserProfilePicture(user, file);
        this.setState = {
          profileImage: null,
        };
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Account Not Verified By Admin");
    }
  };

  handleChange = (event) => {
    const file = event.target.files[0];
    const { name } = event.target;
    this.setState({ [name]: file });
  };

  render() {
    return (
      <div className="update-profile-picture">
        <div className="profile-picture-container">
          <img
            class="profile-picture"
            alt="Eagle Rocketry SEDS Logo"
            src={
              this.state.userProfileImage
                ? this.state.userProfileImage
                : "/images/eagle-rocketry.png"
            }
          />

          <h3 className="user-name">{this.state.displayName}</h3>
        </div>
        <div className="upload-form">
          <input
            type="file"
            name="profileImage"
            accept="image/png, image/jpeg"
            onChange={this.handleChange}
          />
          <CustomButton onClick={this.handleUpload} inverted>
            UPLOAD
          </CustomButton>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UpdateProfilePicture);
