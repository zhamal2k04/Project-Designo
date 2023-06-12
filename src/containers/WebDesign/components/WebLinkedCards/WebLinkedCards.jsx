import React from "react";
import { Link } from "react-router-dom";
import "../WebLinkedCards/WebLinkedCards.css";

const WebLinkedCards = () => {
  return (
    <div className="linkedCards-container">
      <div className="web-design">
        <h1>Web Design</h1>
        <Link to="/web-design">
          View Projects <span style={{ color: "wheat" }}>→</span>
        </Link>
      </div>
      <div className="secondary-linkedCards">
        <div className="app-design">
          <h1>App Design</h1>
          <Link to="/app-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </div>
        <div className="graphic-design">
          <h1>Graphic-design</h1>
          <Link tp="/graphic-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebLinkedCards;
