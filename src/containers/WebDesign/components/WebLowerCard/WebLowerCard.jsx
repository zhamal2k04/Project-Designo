import React from "react";
import "../WebLowerCard/WebLowerCard.css";

const WebLowerCard = () => {
  return (
    <div>
      <div className="webLowerCard-container">
        <div className="webLowerCard-left-container">
          <h1>Let's talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className="webLowerCard-right-container">
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default WebLowerCard;
