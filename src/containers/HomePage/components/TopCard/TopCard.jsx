import React from "react";
import "../TopCard/TopCard.css";

const TopCard = () => {
  return (
    <div className="topcard-container">
      <div className="topcard-left-container">
        <h1>
          Award-winning custom <br /> designs and digital <br />
          branding solutions
        </h1>
        <p>
          With over 10 years in the industry, we are experienced in <br />{" "}
          creating fully responsive websites, app design, and engaging <br />{" "}
          brand experiences. Find out more about our services.
        </p>
        <button>Learn More</button>
      </div>
      <div className="topcard-right-container">
        <div className="right-oval"></div>
        <div className="topcard-right-phone">
          
        </div>
      </div>
    </div>
  );
};

export default TopCard;
