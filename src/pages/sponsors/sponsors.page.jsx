import React from "react";

import "./sponsors.style.scss";
import SponsorCard from "../../components/sponsor-card/sponsor-card.component";
import SPONSOR_DATA from "./sponsors.data";

class SponsorsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sponsors: SPONSOR_DATA,
    };
  }

  render() {
    const { sponsors } = this.state;
    return (
      <div className="sponsors-page">
        <div className="text-center">
          <h1>THANK YOU</h1>
          <h3>
            with your support, we can accomplish our goals and reach new heights
          </h3>
        </div>
        <div className="sponsors">
          {sponsors.map(({ imageUrl, link, desc }) => (
            <SponsorCard imageUrl={imageUrl} link={link} desc={desc} />
          ))}
        </div>
      </div>
    );
  }
}

export default SponsorsPage;
