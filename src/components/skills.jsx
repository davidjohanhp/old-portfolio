import React from "react";

import html from "../img/html-logo.png";
import css from "../img/css-logo.png";
import django from "../img/django-logo.png";
import docker from "../img/docker-logo.png";
import git from "../img/git-logo.png";
import heroku from "../img/heroku-logo.png";
import js from "../img/js-logo.png";
import postgres from "../img/postgres-logo.png";
import react from "../img/react-logo.png";
import springboot from "../img/springboot-logo.png";
import flutter from "../img/flutter-logo.png"
// import htmlcssjs from "../img/html-css-js.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

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
      AOS.init({
        duration: 1000
      });
      return (
        <section id="skills" className="skills-mf sect-pt4 route" data-AOS="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
                <p className="subtitle-a">
                  Current Development Related Skills
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="skills pt-4 pt-md-0">
                <div class="skills-wrapper">
                {/* <div>
                    <img
                      src={htmlcssjs}
                      alt=""
                      loading="lazy"
                      class="icon icon-card"
                    />
                  </div> */}
                  <div>
                    <img
                      src={html}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={css}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={js}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                  </div>

                  <div>
                    <img
                      src={react}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={flutter}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={django}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={springboot}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                  </div>

                  <div>
                    <img
                      src={postgres}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={git}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={heroku}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                    <img
                      src={docker}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    />
                  </div>

                  <div>
                    {/* <img
                      src={heroku}
                      alt=""
                      loading="lazy"
                      className="icon icon-card"
                    /> */}
                    {/* <img
                      src={git}
                      alt=""
                      loading="lazy"
                      class="icon icon-card"
                    />
                    <img
                      src={docker}
                      alt=""
                      loading="lazy"
                      class="icon icon-card"
                    /> */}
                  </div>
                </div>
                  {/* <ul className='skills__list text-white'>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={html} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={css} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={js} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={react} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={springboot} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={django} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={postgres} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={git} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={heroku} className='skill-logo'></img>
                    </li>
                    <li className='skills__list-item btn btn--plain'>
                      <img src={docker} className='skill-logo'></img>
                    </li>
                    {this.state.curSkills.map((skill) => (
                      <li key={skill.id} className='skills__list-item btn btn--plain'>
                        {skill}
                      </li>
                    ))}
                  </ul> */}
              </div>
            </div>
          </div>
        </div>
        </section>
      );
    }
}
  
export default Skills;