import React from "react";
import "./Subscribe.css";

import img1 from '../../Assets/drive.jpg'


const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={img1} alt="driving image" />
      </div>

      <div className="textDiv">
        <h4>The Best Way to Start Your Journey!</h4>
        <p>
          We offer personalized itineraries tailored to individual preferences
          and interests.
        </p>
        <button className="btn">Start Here</button>
      </div>
    </div>
  );
};

export default Subscribe;
