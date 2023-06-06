import React from "react";
import "../GraphicMainCard/GraphicMainCard.css";
import img_card01 from "../images/Card-img01.svg";
import img_card02 from "../images/Card-img02.svg";
import img_card03 from "../images/Card-img03.svg";

const GraphicMainCard = () => {
  return (
    <div className="Card-container">
      <div className="graphicMainCard-container">
        <div className="graphic-card">
          <div className="card-image1">
            <img src={img_card01} alt="image" />
          </div>
          <div className="graphic-card-text">
            <div className="graphic-card-title">
              <h1>Tim Brown</h1>
            </div>
            <div className="graphic-card-p">
              <p>A book cover designed for Tim Brown's new release, 'Change'</p>
            </div>
          </div>
        </div>
        <div className="graphic-card">
          <div className="graphic-image">
            <img src={img_card02} alt="image" />
          </div>
          <div className="graphic-card-text">
            <div className="graphic-card-title">
              <h1>Boxed Water</h1>
            </div>
            <div className="graphic-card-p">
              <p>A simple packaging concept made for Boxed Water</p>
            </div>
          </div>
        </div>
        <div className="graphic-card">
          <div className="graphic-image">
            <img src={img_card03} alt="image" />
          </div>
          <div className="graphic-card-text">
            <div className="graphic-card-title">
              <h1>Science!</h1>
            </div>
            <div className="graphic-card-p">
              <p>A poster made in collaboration with the Federal Art Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicMainCard;
