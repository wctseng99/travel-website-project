import React from "react";
import "./Reviews.css";

// import icons
import { AiFillStar } from "react-icons/ai";

// import users
import image1 from "../../Assets/user1.jpg";
import image2 from "../../Assets/user2.jpg";
import image3 from "../../Assets/user3.jpg";
import image4 from "../../Assets/user4.jpg";
import image5 from "../../Assets/user5.jpg";

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            cursus egestas dolor ornare tincidunt. Aenean dignissim, neque et
            tempor euismod, ipsum purus dictum nisl, vitae imperdiet lacus mi
            rutrum mauris. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>

          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={image2} alt="client image" />
            <img src={image1} alt="client image" />
            <img src={image3} alt="client image" />
            <img src={image5} alt="client image" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={image4} alt="Div Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;