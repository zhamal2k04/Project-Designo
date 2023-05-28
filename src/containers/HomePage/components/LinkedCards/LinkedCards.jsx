import React from "react";
import "../LinkedCards/LinkedCards.css";

const LinkedCards = () => {
  return (
    <div className="linkedCards-container">
      <div className="web-design">
        <h1>Web Design</h1>
        <p>
          View Projects <span id="span"></span>
        </p>
      </div>
      <div className="secondary-linkedCards">
        <div className="app-design">
          <h1>App Design</h1>
          <p>
            View Projects <span id="span"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkedCards;
