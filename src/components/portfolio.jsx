import React from "react";

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

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaInstagram, FaExternalLinkAlt, FaGithub, FaImages} from "react-icons/fa";

class Portfolio extends React.Component {
    constructor() {
      super();
      this.state = {
        
      };
    }
  
    render() {
      AOS.init({
        duration: 1000
      });
      return (
        <section id="work" className="portfolio-mf sect-pt4 route" data-AOS="fade-down">
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
            <div className="row porto justify-content-center">
              <div className="col-md-4 d-flex">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-dark">RumahSehat Mobile</h5>
                    <div className="d-flex gap-2">
                      <span class="badge bg-dark">Flutter</span>
                      <span class="badge bg-dark">Springboot</span>
                    </div>
                    <p class="card-text pt-1">RumahSehat is a Flutter-based application that provides features for patients to support hospitals or clinics such as
                      making an appointment, viewing bills, viewing recipes, and viewing upcoming appointments. Developed by me and 5
                      other teammates.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div className="d-flex gap-2 justify-content-center">
                      <a href={rumahsehatmob_login} data-lightbox="gallery-rumahsehatmob">
                        <FaImages size={25}/>
                      </a>
                      <a href="https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat_mobile" title="Github">
                        <FaGithub size={25} /> 
                      </a>
                    </div>
                  </div>
                </div>
                <div>
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
              </div>
              <div className="col-md-4 d-flex">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-dark">RumahSehat Web</h5>
                    <div className="d-flex gap-2">
                      <span class="badge bg-dark">HTML5</span>
                      <span class="badge bg-dark">CSS3</span>
                      <span class="badge bg-dark">Bootstrap</span>
                      <span class="badge bg-dark">Springboot</span>
                    </div>
                    <p class="card-text pt-1">RumahSehat is a website designated for hospital staffs that provides features to support hospitals or clinics such as
                      maintaining appointments, viewing bills, viewing recipes, and viewing upcoming appointments. Developed by me and 5
                      other teammates.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div className="d-flex gap-2 justify-content-center">
                      <a href={rumahsehatweb_login}  data-lightbox="gallery-rumahsehatweb">
                        <FaImages size={25}/>
                      </a>
                      <a href="https://gitlab.cs.ui.ac.id/david.johan/ta_a_ori_55/-/tree/main/rumahSehat" title="Github">
                        <FaGithub size={25} /> 
                      </a>
                    </div>
                  </div>
                </div>
                <div>
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
              </div>
              <div className="col-md-4 d-flex">
                <div class="card">
                  <div class="card-body flex-column">
                    <h5 class="card-title text-dark">LindungiPeduli App</h5>
                    <div className="d-flex gap-2">
                      <span class="badge bg-dark">Flutter</span>
                      <span class="badge bg-dark">Django</span>
                    </div>
                    <p class="card-text pt-1">LindungiPeduli is a Flutter-based application that provides latest information about COVID-19 test locations,
                    accumulative positive cases, vaccines, medicines, and forums. Developed by me and 6 other teammates.
                    </p>
                  </div>
                  <div class="card-footer">
                    <div className="d-flex gap-2 justify-content-center">
                      {/* <a href={rumahsehatweb_login}  data-lightbox="gallery-rumahsehatweb">
                        <FaImages size={25}/>
                      </a> */}
                      <a href="https://gitlab.com/d02-pbp-2021/uas_project" title="Github">
                        <FaGithub size={25} /> 
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  {/* untuk foto */}
                </div>
              </div>
              <div className="col-md-4 d-flex pt-3">
                <div class="card">
                  <div class="card-body flex-column">
                    <h5 class="card-title text-dark">Simple Posts Web</h5>
                    <div className="d-flex gap-2">
                      <span class="badge bg-dark">React Js</span>
                      <span class="badge bg-dark">Golang Gin</span>
                    </div>
                    <p class="card-text pt-1">A simple posts website for users to create, edit, and delete text posts. 
                    </p>
                  </div>
                  <div class="card-footer">
                    <div className="d-flex gap-2 justify-content-center">
                      <a href="https://posts-app-frontend.vercel.app/" title="Web">
                        <FaExternalLinkAlt size={20} /> 
                      </a>
                      <a href="https://github.com/davidjohanhp/posts-app-frontend" title="Github">
                        <FaGithub size={25} /> 
                      </a>
                      <a href="https://github.com/davidjohanhp/posts-app-backend" title="Github">
                        <FaGithub size={25} /> 
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  {/* untuk foto */}
                </div>
              </div>

              {/* <div className="col-md-4 container">
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
              </div> */}

              {/* <div className="col-md-4 container">
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
              </div> */}
              
            </div>
          </div>
        </section>
      );
    }
}
  
export default Portfolio;