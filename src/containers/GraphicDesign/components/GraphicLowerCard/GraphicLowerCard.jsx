import React from "react";
import "../GraphicLowerCard/GraphicLowerCard.css";

const GraphicLowerCard = () => {
  return (
    <div className="graphicLowerCard-container">
      <div className="graphicLowerCard-left-container">
        <div className="graphic-text-title">
          <h1>Let's talk about your project</h1>
        </div>
        <div className="graphic-text-paragraph">
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
      </div>
      <div className="graphicLowerCard-right-container">
        <button id="graphic-btn">Get in touch</button>
      </div>
    </div>
  );
};

export default GraphicLowerCard;
