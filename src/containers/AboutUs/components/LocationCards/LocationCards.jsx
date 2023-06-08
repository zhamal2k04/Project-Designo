import React from "react";
import "../LocationCards/LocationCards.css";
import locationImg1 from "../../images/Canada.svg";
import locationImg2 from "../../images/Australia.svg";
import locationImg3 from "../../images/UK.svg";
import { Link } from "react-router-dom";
const LocationCards = () => {
  return (
    <div className="lowerLocation-container">
      <div className="cardsHolder">
        <div className="cardNum1">
          <img src={locationImg1} alt="loc-img" />
          <h1>Canada</h1>
          <Link>
            <button id="btn-loc">See Location</button>
          </Link>
        </div>
        <div className="cardNum1">
          <img src={locationImg2} alt="loc-img" />
          <h1>Australia</h1>
          <Link>
            <button id="btn-loc">See Location</button>
          </Link>
        </div>
        <div className="cardNum1">
          <img src={locationImg3} alt="loc-img" />
          <h1>United Kingdom</h1>
          <Link>
            <button id="btn-loc">See Location</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCards;
