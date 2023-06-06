import React from "react";
import "../AppLinkedCards/AppLinkedCards.css";
import { Link } from "react-router-dom";
const AppLinkedCards = () => {
  return (
    <div className="appLinkedCard-container">
      <div className="appLinkedCard-left-container">
        <section className="appLinkedCard-img-0">
          <h1>Web Design</h1>
          <Link to="/web-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </section>
      </div>
      <div className="appLinkedCard-right-container">
        <section className="appLinkedCard-img-1">
          <h1>App Design</h1>
          <Link to ="/app-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </section>
        <section className="appLinkedCard-img-2">
          <h1>Graphic Design</h1>
          <Link to="/graphic-design">
            View Projects <span style={{ color: "wheat" }}>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
};
export default AppLinkedCards;
