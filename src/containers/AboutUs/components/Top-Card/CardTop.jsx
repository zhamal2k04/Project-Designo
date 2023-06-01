import React from "react";
import "../Top-Card/CardTop.css";
import right_img from "../../images/image.svg";

const CardTop = () => {
  return (
    <div className="cardTop-container">
      <div className="cardTop-left">
        <div className="cardTop-title">
          <h1>About Us</h1>
        </div>
        <div className="cardTop-paragraph">
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <div className="cardTop-oval"></div>
      </div>
      <div className="cardTop-right">
        <img src={right_img} alt="right-img" />
      </div>
    </div>
  );
};

export default CardTop;
