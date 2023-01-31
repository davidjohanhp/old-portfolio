import React from "react";
import { FaInstagram, FaLinkedin} from "react-icons/fa";
import { IconContext } from "react-icons";

class Footer extends React.Component {
    render () {
        return (
            <section id="footer" className="footer-mf route">
                <div className="footer text-center">
                    <h4 className="footer-name">David Johan Hasiholan Parhusip</h4>
                    <p className="footer-desc">Undergraduate Information Systems</p>
                    <div class="social-nav">
                        <ul className="nav justify-content-center">
                            {/* <li className="nav-item"><a className="nav-link" href="" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></a></li> */}
                            {/* <li className="nav-item"><a className="nav-link" href="" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a></li> */}
                            <li className="nav-item-footer"> 
                                <a className="" href="https://www.instagram.com/davidjohanhp/" title="Instagram">
                                    <FaInstagram /> 
                                    {/* <i className="fab fa-instagram"></i> */}
                                    {/* <span className="">Instagram</span> */}
                                </a>
                            </li>
                            <li className="nav-item-footer"> 
                                <a className="" href="https://www.linkedin.com/in/davidjh-parhusip/" title="Instagram">
                                    <FaLinkedin /> 
                                    {/* <i className="fab fa-instagram"></i> */}
                                    {/* <span className="">LinkedIn</span> */}
                                </a>
                            </li>
                            {/* <li className="nav-item"><a className="nav-link" href="" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></a></li> */}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;