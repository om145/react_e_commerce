import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcAmex,
  faCcDiscover,
  faPaypal,
  faYoutube,
  faFacebook,
  faInstagram,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-colm">
            <div className="footer-title">About</div>
            <div className="footer-contant">
              <div className="information">
                PurchasePlaza, India's largest fashion e-commerce store, offers
                a wide range of trendy products and brands. It aims to provide a
                hassle-free shopping experience nationwide.
              </div>
              <div className="pay-cards">
                <FontAwesomeIcon icon={faPaypal} className=" footer-pay-i" />
                {/* <FontAwesomeIcon icon={faCreditCard} /> */}
                <FontAwesomeIcon icon={faCcVisa} className=" footer-pay-i" />
                <FontAwesomeIcon icon={faCcAmex} className=" footer-pay-i" />
                <FontAwesomeIcon
                  icon={faCcDiscover}
                  className=" footer-pay-i"
                />
              </div>
              <div className="security">
                <FontAwesomeIcon icon={faLock} />
                <span className="secure">Secure Online Payment</span>
              </div>
            </div>
          </div>
          <div className="footer-colm">
            <div className="footer-title">Categories</div>
            <div className="font-contant">
              <ul>
                <li>
                  <NavLink to="category">Men's cloathing</NavLink>
                </li>
                <li>
                  <NavLink to="category">Women's cloathing</NavLink>
                </li>
                <li>
                  <NavLink to="category">Electronics</NavLink>
                </li>
                <li>
                  <NavLink to="category">Jewelory</NavLink>
                </li>
                <li>
                  <NavLink to="category">All</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-colm">
            <div className="footer-title">Information</div>
            <div className="footer-contant">
              <ul>
                <li>
                  <NavLink to="aboutus">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="contactus">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="term and condition">Term & Condition</NavLink>
                </li>
                <li>
                  <NavLink to="/return">Cancellation & Return</NavLink>
                </li>
                <li>
                  <NavLink to="/shopping">Shopping And Delivery</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy policy">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-colm">
            <div className="footer-title">Contact</div>
            <div className="footer-contant">
              <div className="address">
                Address : Mannat, Land's End, Bandstand, Bandra (West), Mumbai,
                Maharashtra - 400050.
              </div>
              <hr />
              <div className="footer-mo no">Phone : 18008893999</div>
              <div className="footer-email">Email : rajatdalal@gmail.com</div>
              <hr />
              <div className="footer-sm-icon">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faGooglePlusG} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 Shopping Site. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
