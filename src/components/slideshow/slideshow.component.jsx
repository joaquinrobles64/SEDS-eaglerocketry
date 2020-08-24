import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./slideshow.style.scss";
import SLIDESHOW_DATA from "./slideshow.data";

class SlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SLIDESHOW_DATA,
    };
  }

  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          {this.state.sections.map(({ imageUrl, title, desc }) => (
            <Carousel.Item>
              <img alt="" src={imageUrl} className="sauce"></img>
              <Carousel.Caption>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
