import React from "react";

import panda from "../img/panda.jpg";

import rumahsehatweb_login from "../img/rumahsehat-web/rumahsehatweb-login.png";
import rumahsehatweb_home from "../img/rumahsehat-web/rumahsehatweb-home.png";
import rumahsehatweb_chart from "../img/rumahsehat-web/rumahsehatweb-chart.png";

import rumahsehatmob_login from "../img/rumahsehat-mobile/login.png";
import rumahsehatmob_logout from "../img/rumahsehat-mobile/logout.png";
import rumahsehatmob_home from "../img/rumahsehat-mobile/home.png";
import rumahsehatmob_profile from "../img/rumahsehat-mobile/profile.png";
import rumahsehatmob_topup from "../img/rumahsehat-mobile/topup.png";
import rumahsehatmob_makeappointment from "../img/rumahsehat-mobile/makeappointment.png";
import rumahsehatmob_appointmentsuccess from "../img/rumahsehat-mobile/appointmentsuccess.png";
import rumahsehatmob_detailappointment from "../img/rumahsehat-mobile/detailappointment.png";


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
                    Previous Tech Related Projects
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row porto">
              <div className="col-md-4 container">
                <div className="work-box">
                  <a href={rumahsehatweb_login} data-lightbox="gallery-rumahsehatweb" className="text-white">
                    <div className="work-img">
                      <img src={rumahsehatweb_login} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">RumahSehat Web</h2>
                          <div className="w-more">
                            <span className="w-ctegory">
                              HTML5 CSS3 Bootstrap Springboot
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href={rumahsehatweb_home}
                    data-lightbox="gallery-rumahsehatweb"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatweb_chart}
                    data-lightbox="gallery-rumahsehatweb"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                </div>
                {/* copy buat tiap project */}
                
              </div>
              <div className="col-md-4 container">
                <div className="work-box">
                  <a href={rumahsehatmob_login} data-lightbox="gallery-rumahsehatmob" className="text-white">
                    <div className="work-img">
                      <img src={rumahsehatmob_login} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">RumahSehat Mobile</h2>
                          <div className="w-more">
                            <span className="w-ctegory">
                              Flutter Springboot
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href={rumahsehatmob_home}
                    data-lightbox="gallery-rumahsehatmob"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatmob_profile}
                    data-lightbox="gallery-rumahsehatmob"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatmob_topup}
                    data-lightbox="gallery-rumahsehatmob"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatmob_makeappointment}
                    data-lightbox="gallery-rumahsehatmob"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatmob_appointmentsuccess}
                    data-lightbox="gallery-rumahsehatmob"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatmob_detailappointment}
                    data-lightbox="gallery-rumahsehatmob"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                  <a
                    href={rumahsehatmob_logout}
                    data-lightbox="gallery-rumahsehatmob"
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