import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        about_me: [
          {
            id: "first-p-about",
            content:
              "Hi, my name is David Johan Hasiholan Parhusip, I'm currently in my third year of study in Computer Science at Universitas Indonesia."
          },
          {
            id: "second-p-about",
            content:
              "I’m hardworking and dedicated towards my work, also I ensure that I would work to the fullest of my capabilities. I have been passionate working in the IT field and I know I can be a valuable support resource. With my educational background, I have a year of hands-on experience working with Python, Java, CSS, HTML, JavaScript, Flutter, and PostgreSQL. I also have experience on efficiently working back-end development using Springboot and Django. In my most recent education, I successfully developed an application using Flutter and Springboot framework, which improved my communication skill and leading other teammates during the project."
          },
          {
            id: "third-p-about",
            content:
              "In the next few years, my goal is to successfully master my position and advance into the field of computer programming. As I look forward to my next chapter, I hope to apply my experience and perspective to help companies hit and exceed goals."
          }
        ]
      };
    }
  
    render() {
      AOS.init({
        duration: 1000
      });
      return (
        <section id="about" className="about-mf sect-pt4 route" data-AOS="fade-down">
          <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">About Me</h3>
                <p className="subtitle-a">
                  David Johan Hasiholan Parhusip, Information Systems Student
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="about-me pt-4 pt-md-0">
                {/* <div className="title-box-2">
                    <h5 className="title-left">About Me</h5>
                </div> */}
                {this.state.about_me.map(content => {
                  return (
                    <p className="lead text-white" key={content.id}>
                      {content.content}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
          {/* <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col">
                      <div className="about-me pt-4 pt-md-0">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      );
    }
}
  
export default About;
