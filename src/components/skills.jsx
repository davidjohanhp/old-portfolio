import React from "react";

class Skills extends React.Component {
    constructor() {
      super();
      this.state = {
        curSkills : [
            'HTML',
            'CSS',
            'JavaScript',
            'PostGresQL',
            'React',
            'Git',
            'Java 8',
            'Java Spring Boot',
            'Django',
            'Docker',
            'Heroku'
        ]
      };
    }
  
    render() {
      return (
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">Skills</h5>
                        </div>
                        <ul className='skills__list'>
                          {this.state.curSkills.map((skill) => (
                            <li key={skill.id} className='skills__list-item btn btn--plain'>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
}
  
export default Skills;