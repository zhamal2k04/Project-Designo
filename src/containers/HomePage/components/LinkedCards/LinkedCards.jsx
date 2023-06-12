import React from "react";
import "../LinkedCards/LinkedCards.css";
import { Link } from "react-router-dom";

const LinkedCards = () => {
  return (
    <div className="webLinkedCards-container">
      <div className="web-design">
        <h1>Web Design</h1>
        <Link to="/web-design">
          View Projects <span style={{ color: "wheat" }}>→</span>
        </Link>
      </div>
      <div className="secondary-webLinkedCards">
        <div className="app-design">
          <h1>App Design</h1>
          <Link to="/app-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </div>
        <div className="graphic-design">
          <h1>Graphic-design</h1>
          <Link to="/graphic-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkedCards;
