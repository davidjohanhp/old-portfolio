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
        <section id="skills" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="about-me pt-4 pt-md-0">
                  <ul className='skills__list text-white'>
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
        </section>
      );
    }
}
  
export default Skills;