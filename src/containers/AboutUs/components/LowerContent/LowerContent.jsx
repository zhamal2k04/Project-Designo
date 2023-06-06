import React from "react";
import "../LowerContent/LowerContent.css";
const LowerContent = () => {
  return (
    <div className="lowerContent-container">
      <div className="lowerContent-left">
        <div className="lowerContent-text">
          <h1>The real deal</h1>
          <p>
            As strategic partners in our clients' businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. <br /><br /><br /> We are visual
            storytellers in appealing and captivating ways. By combining
            business and marketing strategies, we inspire audiences to take
            action and drive real results.
          </p>
        </div>
        <div className="ovals">
            <div className="ovalNum1" id="firstOne"></div>
            <div className="ovalNum2" id="secondOne"></div>
        </div>
      </div>
      <div className="lowerContent-right"></div>
    </div>
  );
};

export default LowerContent;
