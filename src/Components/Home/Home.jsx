import React from "react";
import "./Home.css";
// import Assets
import Video from "../../Assets/cover-video.mp4";

// import Icons
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Unlock Yuor Travel Dreams With Us!</h1>
        <p>
          Discover the world's most advanturous nature, life is so short for a
          trip.
        </p>
        <button className="btn">
          Get Started
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex"></div>
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
