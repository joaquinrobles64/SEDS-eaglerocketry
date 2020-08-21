import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.displayName,
    };
  }

  render() {
    return (
      <div>
        <div className="Account">{this.state.name}</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AccountPage);
