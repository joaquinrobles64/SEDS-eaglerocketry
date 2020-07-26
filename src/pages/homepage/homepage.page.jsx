import React from "react";

import SlideShow from "../../components/slideshow/slideshow.component";
import Card from "react-bootstrap/Card";
import "./homepage.style.scss";

const HomePage = () => (
  <div className="home-page">
    <SlideShow />

    <div className="join">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">ABOUT US</Card.Title>
          <Card.Text className="text-center">
            <div>
              not sure what to write here. 
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default HomePage;
