import React from "react";
import "../AppLowerCard/AppLowerCard.css";

const AppLowerCard = () => {
  return (
    <div className="appLowerCard-container">
      <div className="appLowerCard-left-container">
        <div className="app-text-title">
          <h1>Let's talk about your project</h1>
        </div>
        <div className="app-text-paragraph">
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
      </div>
      <div className="appLowerCard-right-container">
        <button id="app-btn">Get in touch</button>
      </div>
    </div>
  );
};

export default AppLowerCard;
