import React from "react";

import panda from "../img/panda.jpg";

class Portfolio extends React.Component {
    constructor() {
      super();
      this.state = {
        
      };
    }
  
    render() {
      return (
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Portfolio</h3>
                  <p className="subtitle-a">
                    Incididunt nostrud id aute culpa excepteur pariatur consequat
                    elit culpa nulla enim anim incididunt.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a href={panda} data-lightbox="gallery-lindungipeduli" className="text-white">
                    <div className="work-img">
                      <img src={panda} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Lorem Ipsum</h2>
                          <div className="w-more">
                            <span className="w-ctegory">
                              HTML5 CSS3 Bootstrap ReactJS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href={panda}
                    data-lightbox="gallery-lindungipeduli"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={panda}
                    data-lightbox="gallery-lindungipeduli"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={panda}
                    data-lightbox="gallery-lindungipeduli"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={panda}
                    data-lightbox="gallery-lindungipeduli"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={panda}
                    data-lightbox="gallery-lindungipeduli"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                </div>
                {/* copy buat tiap project */}
                
              </div>
              
            </div>
          </div>
        </section>
      );
    }
}
  
export default Portfolio;