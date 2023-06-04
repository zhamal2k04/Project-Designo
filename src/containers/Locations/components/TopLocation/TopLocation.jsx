import React from "react";
import "../TopLocation/TopLocation.css";

const TopLocation = () => {

  return (
    <div className="topLocation-container">
      <div className="leftLocation-section">
        <div className="locationOval">
          <h1>Canada</h1>
          <p>
            <span style={{ fontWeight: "bold" }}>Designo Central Office</span>
            <br />
            3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
        </div>
        <div className="contactOval">
          <span>Contact</span>
          <p>Contact P : +1 253-863-8967 M : contact@designo.co</p>
        </div>
      </div>
      <div className="rightLocation-section"></div>
    </div>
  );
};

export default TopLocation;
