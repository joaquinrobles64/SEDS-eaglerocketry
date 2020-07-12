import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./slideshow.style.scss";

class SlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          imageUrl: "/images/img1.jpg",
        },
        {
          imageUrl: "/images/img2.jpg",
        },
        {
          imageUrl: "/images/img3.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <Carousel >
        {this.state.sections.map(({ imageUrl }) => (
          <Carousel.Item>
            <img alt="" src={imageUrl} className="sauce"></img>
            <Carousel.Caption>
              <h1>WELCOME</h1>
              <h3>where next generation engineers are born</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default SlideShow;
