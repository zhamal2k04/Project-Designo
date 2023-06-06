import React from "react";
import "../Lower-Card/LowerCard.css";

const LowerCard = () => {
  return (
    <div className="CardLower-container">
      <div className="CardLower-left">
        <h1>Let's talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="CardLower-right">
        <button>Get in Touch</button>
      </div>
    </div>
  );
};

export default LowerCard;
