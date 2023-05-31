import React from "react";
import "../WebLinkedCards/WebLinkedCards.css";

const WebLinkedCards = () => {
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
        <div className="graphic-design">
          <h1>Graphic-design</h1>
          <p>
            View Projects <span id="span"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebLinkedCards;
