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
          <Card.Text>
            <div className="row">
              <div className="col-12 col-lg-6 text-center">
                <iframe
                  className="google-maps"
                  frameborder="0"
                  height="450"
                  longdesc='title="Google Maps Location of University Student Union" '
                  name="University Student Union"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0688679738623!2d-118.16763204543994!3d34.06774880962451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e34316a925f4d3!2sUniversity-Student+Union%2C+CSULA!5e0!3m2!1sen!2sus!4v1413993100696"
                  title="Google Maps Location of University Student Union"
                  width="600"
                  id="University Student Union"
                >
                  Your browser does not support inline frames or is currently
                  configured not to display inline frames
                </iframe>
              </div>
              <div className="col-12 p-4 col-lg-6 text-justify">
                The purpose and objective of this club is to design,
                manufacture, and compete with a student-built rocket and qualify
                for the 2020 Spaceport America Cup competition in the 30,000
                feet SRAD division. The 13-foot rocket will be designed and
                built both through in-house fabricated components as well as
                outsourcing components that cannot be manufactured by students.
                The outer shell of the vehicle will be comprised of a nose cone,
                fins, and air brakes. We opted for carbon fiber for the airframe
                due its ability to withstand high stress, strain and lightweight
                properties. The modular rocket will be broken down into stages 1
                and 2. Stage 1 will be the propulsion system which consists of a
                solid fuel tank and nozzle chamber assembly. The tank and the
                chamber will be designed out of copper, aluminum and titanium
                due to their mechanical and thermal properties that allow them
                to resist major temperature changes and stresses produced by
                pressurization. Stage 2 will be the top section of the rocket
                which consists of the payload deployment system, electrical
                system, and navigation control system that will all be student
                designed and built instead of purchased.
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default HomePage;
