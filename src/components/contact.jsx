import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

class Contact extends React.Component {
  render() {
    AOS.init({
        duration: 1000
      });
    return (
      <section id="contact" className="contact-mf sect-pt4 route" data-AOS="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <div className="title-box text-center">
                    <h3 className="title-a">Contact Me!</h3>
                    <p className="subtitle-a">
                    Simply Fill the Form and Send Me an Email
                    </p>
                    <div className="line-mf"></div>
                </div>
            </div>
            <div className="row contact-form">
                <form
                    action="https://formspree.io/f/xvongnaw"
                    method="POST"
                    className="contactForm"
                >
                    <div id="sendmessage">
                    Your message has been sent. Thank you!
                    </div>
                    <div id="errormessage"></div>
                    <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                        />
                        <div className="validation"></div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                        />
                        <div className="validation"></div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation"></div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                        <textarea
                            className="form-control"
                            name="message"
                            rows="5"
                            data-rule="required"
                            data-msg="Please write something for us"
                            placeholder="Message"
                        ></textarea>
                        <div className="validation"></div>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button
                        type="submit"
                        className="button button-a button-rouded"
                        >
                        Send Message
                        </button>
                    </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;