import React from "react";

import SlideShow from "../../components/slideshow/slideshow.component";
import "./homepage.style.scss";

const HomePage = () => (
  <div className="home-page">
    <SlideShow />

    <div className="about-us">
      <h2 className="text-center">ABOUT US</h2>
      <div className="about-us-container">
        <div className="col-12 col-lg-8 google-maps-container text-center">
          <iframe
            className="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3305.1534074775986!2d-118.16650859893126!3d34.06558150809977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c2c598a15e7bf5%3A0x6380287a3770f633!2scal%20state%20la%20ecst!3m2!1d34.0664453!2d-118.1666638!5e0!3m2!1sen!2sus!4v1595891516744!5m2!1sen!2sus"
            frameborder="0"
            allowfullscreen=""
            title="Cal State LA ECST"
            aria-hidden="false"
            tabindex="0"
          />
        </div>
        <div className="col-12 p-4 col-lg-8 about-us-desc">
          The purpose and objective of this club is to design, manufacture, and
          compete with a student-built rocket and qualify for the 2020 Spaceport
          America Cup competition in the 30,000 feet SRAD division. The 13-foot
          rocket will be designed and built both through in-house fabricated
          components as well as outsourcing components that cannot be
          manufactured by students. The outer shell of the vehicle will be
          comprised of a nose cone, fins, and air brakes. We opted for carbon
          fiber for the airframe due its ability to withstand high stress,
          strain and lightweight properties. The modular rocket will be broken
          down into stages 1 and 2. Stage 1 will be the propulsion system which
          consists of a solid fuel tank and nozzle chamber assembly. The tank
          and the chamber will be designed out of copper, aluminum and titanium
          due to their mechanical and thermal properties that allow them to
          resist major temperature changes and stresses produced by
          pressurization. Stage 2 will be the top section of the rocket which
          consists of the payload deployment system, electrical system, and
          navigation control system that will all be student designed and built
          instead of purchased.
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
