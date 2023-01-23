import React from "react";

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
          // {
          //   id: "third-p-about",
          //   content:
          //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
          // }
        ]
      };
    }
  
    render() {
      return (
        <section id="about" className="about-mf sect-pt4 route">
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
