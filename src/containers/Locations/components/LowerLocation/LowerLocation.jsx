import React from "react";
import "../LowerLocation/LowerLocation.css";

const LowerLocation = () => {
  return (
    <div className="lowerLocation-container">
      <div className="lowerLeft">
        <div className="locationOval-lower">
          <h1>Australia</h1>
          <p>
            <span style={{ fontWeight: "bold" }}>Designo UK Office</span>
            <br />
            13 Colorado Way
            <br />
            Rhyd-y-fro SA8 9GA
          </p>
        </div>
        <div className="contactOval-lower">
          <span>Contact</span>
          <p>Contact P : +1 253-863-8967 M : contact@designo.uk</p>
        </div>
      </div>
      <div className="lowerRight"></div>
    </div>
  );
};

export default LowerLocation;
