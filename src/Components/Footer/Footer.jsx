import React from "react";
import "./Footer.css";

import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>MulTrip</span>
          </div>
        </div>

        <div className="socials flex">
          <ImFacebook className="icon" />
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
          <AiFillGithub className="icon" />
          <AiFillLinkedin className="icon" />
          <BsDiscord className="icon" />
        </div>

        <div className="LinksSection">
          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Contact Details</span>
            <span className="phone">+886 975 048 742</span>
            <span className="email">wctseng@gmail.com</span>
          </div>
          <div className="right">
            <p>All Rights Reserved © MulTrip</p>
            <p>
              <span className="policy">Terms</span> |{" "}
              <span className="policy">Privacy</span> |{" "}
              <span className="policy">Security</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
