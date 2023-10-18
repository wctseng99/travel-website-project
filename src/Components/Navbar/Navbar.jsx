import React, { useState } from "react";
import "./Navbar.css";

// import icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  // State to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  };
  // function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>MulTrip</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>

        {/* Icon to remove Narbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
      <button className="signUpBtn btn">Sign Up</button>
      {/* icon to toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onMouseEnter={showNavBar} />
    </div>
  );
};

export default Navbar;
