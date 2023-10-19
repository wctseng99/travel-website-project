import React, { useState } from "react";
import "./Destination.css";

// import icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

// import images
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

const destinations = [
  {
    id: 1,
    img: img1,
    name: "Washington",
    location: "United States",
    rating: "4.5",
  },
  {
    id: 2,
    img: img2,
    name: "Hawaii",
    location: "United States",
    rating: "4.8",
  },
  {
    id: 3,
    img: img3,
    name: "Tokyo",
    location: "Japan",
    rating: "4.6",
  },
  {
    id: 4,
    img: img4,
    name: "Taipei",
    location: "Taiwan",
    rating: "4.4",
  },
  {
    id: 5,
    img: img5,
    name: "Singapore",
    location: "Singapore",
    rating: "5.0",
  },
  {
    id: 6,
    img: img6,
    name: "Lauterbrunnen",
    location: "Switzerland",
    rating: "4.7",
  },
  {
    id: 7,
    img: img7,
    name: "Reykjavík",
    location: "Iceland",
    rating: "4.8",
  },
  {
    id: 8,
    img: img8,
    name: "Palawan",
    location: "Philippines",
    rating: "4.6",
  },
  {
    id: 9,
    img: img9,
    name: "New York",
    location: "United States",
    rating: "4.7",
  },
];


const Destination = () => {

  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="sectTitle">
          <span className="redText">EXPLORE NOW</span>
          <h3> Find Your Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="From" />
          </div>

          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="To" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>

          <button className="btn flex">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div 
                className="singleDestination" 
                key={destination.id}
                onMouseEnter={() => handleMouseEnter(destination.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`imgDiv ${hoveredId === destination.id ? "hovered" : ""}`}>
                  <img src={destination.img} alt="Destination Image" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
