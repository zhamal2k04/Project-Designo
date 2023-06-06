import React from "react";
import { Link } from "react-router-dom";
import "../GraphicLinkedCards/GraphicLinkedCards.css";

const GraphicLinkedCards = () => {
  return (
    <div className="graphicLinkedCard-container">
      <div className="graphicLinkedCard-left-container">
        <section className="graphicLinkedCard-img-0">
          <h1>Web Design</h1>
          <Link to="/web-design">
            View Projects <span style={{ color: "wheat", fontWeight: 'bold', fontSize: '19px', fontFamily: 'sans-serif'}}>→</span>
          </Link>
        </section>
      </div>
      <div className="graphicLinkedCard-right-container">
        <section className="graphicLinkedCard-img-1">
          <h1>App Design</h1>
          <Link to="/app-design">
             View Projects <span style={{ color: "wheat", fontWeight: 'bold', fontSize: '19px', fontFamily: 'sans-serif'}}>→</span>
          </Link>
        </section>
        <section className="graphicLinkedCard-img-2">
          <h1>Graphic Design</h1>
          <Link to="/graphic-design">
             View Projects <span style={{ color: "wheat", fontWeight: 'bold', fontSize: '19px', fontFamily: 'sans-serif'}}>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
};
export default GraphicLinkedCards;
