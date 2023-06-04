import React from "react";
import "../MiddleLocation/MiddleLocation.css";

const MiddleLocation = () => {
  return (
    <div className="middleLocation-container">
      <div className="middleLeft"></div>
      <div className="middleRight">
        <div className="locationOval-middle">
          <h1>Australia</h1>
          <p>
            <span style={{ fontWeight: "bold" }}>Designo AU Office</span>
            <br />
            19 Balonne Street
            <br />
            New South Wales 2443
          </p>
        </div>
        <div className="contactOval-middle">
          <span>Contact</span>
          <p>Contact P : +1 253-863-8967 M : contact@designo.au</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleLocation;
