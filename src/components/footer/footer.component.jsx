import React from "react";

import { ReactComponent as Logo } from "../../assets/eaglerocketry-icon.svg";
import SOCIALMEDIA_DATA from "./socialmedia.data";

import "./footer.style.scss";


class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      socialmedia: SOCIALMEDIA_DATA,
    };
  }

  render() {
    return (
      <div className="footer">
        <div className="text-center">
          <div className="socials">
            {this.state.socialmedia.map(({ className, link }) => (
              <a href={link}>
                <i className={className}> </i>
              </a>
            ))}
          </div>
          <br></br>
          <Logo className="logo" />
        </div>
      </div>
    );
  }
}

export default Footer;
