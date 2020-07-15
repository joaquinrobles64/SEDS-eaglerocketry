import React from "react";

import SlideShow from "../../components/slideshow/slideshow.component";
import Card from "react-bootstrap/Card";
import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
    <SlideShow />

    <div className="join">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">ABOUT US</Card.Title>
          <Card.Text className="text-center">
            <div className="row">
              <div className="col-lg-6 order-lg-1 order-2 d-none d-sm-block">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13220.42822638039!2d-118.16843920000002!3d34.066769799999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda4a5ce481ad565e!2sCalifornia%20State%20University%2C%20Los%20Angeles!5e0!3m2!1sen!2sus!4v1594666311762!5m2!1sen!2sus"
                  title="Cal State LA"
                  className="map"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                With supporting text below as a natural lead-in to additional
                content.
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default HomePage;
