import React from "react";
import "../LowerInfos/LowerInfos.css";
import man_1 from "../images/man_1.svg";
import man_2 from "../images/man_2.svg";
import man_3 from "../images/man_3.svg";
const LowerInfos = () => {
  return (
    <div className="lower-layout-infos">
      <div className="layout-cards">
        <div className="card1">
          <img src={man_1} />
          <h1>Passionate</h1>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="card2">
          <img src={man_2} />
          <h1>Resourceful</h1>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients' needs.
          </p>
        </div>
        <div className="card3">
          <img src={man_3} />
          <h1>Friendly</h1>
          <p>
            {" "}
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LowerInfos;
