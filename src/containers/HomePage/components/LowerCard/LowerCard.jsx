import React from "react";
import "../LowerCard/LowerCard.css";

const LowerCard = () => {
  return (
    <div className="lowerCard-container">
      <div className="lowerCard-left-container">
        <h1>Let's talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="lowerCard-right-container">
        <button>Get in Touch</button>
      </div>
    </div>
  );
};

export default LowerCard;
