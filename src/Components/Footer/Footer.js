import * as React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LogoFooter from "../../assets/icons/LogoFooter.png";
import InstagramLink from "../../assets/icons/Instagram-link.png";
import BallLink from "../../assets/icons/BallLink.png";
import TwitterLink from "../../assets/icons/Twitter-link.png";

const Footer = () => {
  return (
   

      <section id="footer">

        <div className="container container-main">
          <ul className="footer-general">
            <img className="logo-footer" src={LogoFooter} alt="Logo" />
            <p className="footer-description">
              {" "}
              Copyright © 2020 Nexcent ltd. <br /> All rights reserved
            </p>

            <ul className="footer-download">
              <Link className="social-link" to="/">
                <img className="social-logo" src={InstagramLink} alt="Logo" />
              </Link>
              <Link className="social-link" to="/">
                <img className="social-logo" src={BallLink} alt="Logo" />
              </Link>
              <Link className="social-link" to="/">
                <img className="social-logo" src={TwitterLink} alt="Logo" />
              </Link>
              <Link className="social-link" to="/">
                <img className="social-logo" src={InstagramLink} alt="Logo" />
              </Link>
            </ul>
          </ul>

          <ul className="footer-menu-wrapper">
            <ul className="footer-menu">
              <h3 className="footer-menu-title">Company</h3>
              <Link className="footer-link" to="/">
                About us
              </Link>
              <Link className="footer-link" to="/">
                Contact us
              </Link>
              <Link className="footer-link" to="/">
                Pricing
              </Link>
              <Link className="footer-link" to="/">
                Testimonials
              </Link>
            </ul>
            <ul className="footer-menu">
              <h3 className="footer-menu-title">Support</h3>
              <Link className="footer-link" to="/">
                Help center
              </Link>
              <Link className="footer-link" to="/">
                Legal
              </Link>
              <Link className="footer-link" to="/">
                Privacy policy
              </Link>
              <Link className="footer-link" to="/">
                Status
              </Link>
            </ul>
            <ul className="footer-menu">
              <h3 className="footer-menu-title">Stay up to date</h3>
            </ul>
          </ul>
        </div>

        <div className="container container-social-links">
          <ul className="social-links"></ul>
        </div>
      </section>
    
  );
};

export default Footer;
