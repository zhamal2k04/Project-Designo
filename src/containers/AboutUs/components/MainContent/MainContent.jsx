import React from "react";
import "../MainContent/MainContent.css";
const MainContent = () => {
  return (
    <div className="mainContent-container">
      <div className="mainContent-left">
      </div>
      <div className="mainContent-right">
        <div className="mainContent-title">
          <h1>World-class talent</h1>
        </div>
        <div className="mainContent-paragraph">
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. <br />
            <br />
            <br /> Our team is multi-disciplinary and we are not merely
            interested in form — content and meaning are just as important. We
            give great importance to craftsmanship, service, and prompt
            delivery. Clients have always been impressed with our high-quality
            outcomes that encapsulates their brand's story and mission.
          </p>
        </div>
        <div className="ovals">
          <div className="ovalNum1"></div>
          <div className="ovalNum2"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
