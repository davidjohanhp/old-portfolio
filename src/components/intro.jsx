import React from "react";

import Typical from "react-typical"

const steps = [
  'Back End Developer', 1000,
  'Front End Developer', 1000,
  'Mobile Developer', 1000,
];

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        {/* <div id="stars" />
        <div id="stars2" />
        <div id="stars3" /> */}

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am <span className="name_big">David</span></h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <div>
                    <Typical wrapper="span" steps={steps} loop={Infinity} />
                  </div>
                </strong>
              </p>
              <p className="pt-3">
                {/* <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
