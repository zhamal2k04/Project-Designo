import React from "react";
import "../LowerCard/LocLowerCard.css";

const LocLowerCard = () => {
  return (
    <div className="locLowerCard-container">
      <div className="locLowerCard-left-container">
        <div className="location-text-title">
          <h1>Let's talk about your project</h1>
        </div>
        <div className="location-text-paragraph">
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
      </div>
      <div className="locLowerCard-right-container">
        <button id="loc-btn">Get in touch</button>
      </div>
    </div>
  );
};

export default LocLowerCard;
