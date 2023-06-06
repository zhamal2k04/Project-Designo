import React from "react";
import "../WebMainCards/WebMainCards.css";
import Card_img_1 from "../images/card-img01.svg";
import Card_img_2 from "../images/card-img02.svg";
import Card_img_3 from "../images/card-img03.svg";
import Card_img_4 from "../images/card-img04.svg";
import Card_img_5 from "../images/card-img05.svg";
import Card_img_6 from "../images/card-img06.svg";
const WebMainCards = () => {
  return (
    <div className="webMainCard-handler">
      <div className="webMainCard-container">
        <div className="web-card">
          <div className="webCard-image" id="WebCardImg">
            <img src={Card_img_1} alt="image" />
          </div>
          <div className="web-card-text">
            <div className="web-card-title">
              <h1>Blogr</h1>
            </div>
            <div className="web-card-p">
              <p>
                A multi-carrier shipping website for <br /> ecommerce businesses
              </p>
            </div>
          </div>
        </div>
        <div className="web-card">
          <div className="webCard-image" id="WebCardImg">
            <img src={Card_img_2} alt="image" />
          </div>
          <div className="web-card-text">
            <div className="web-card-title">
              <h1>Transfer</h1>
            </div>
            <div className="web-card-p">
              <p>
                Site for low-cost money transfers and sending money within
                seconds
              </p>
            </div>
          </div>
        </div>
        <div className="web-card">
          <div className="webCard-image" id="WebCardImg">
            <img src={Card_img_3} alt="image" />
          </div>
          <div className="web-card-text">
            <div className="web-card-title">
              <h1>Photon</h1>
            </div>
            <div className="web-card-p">
              <p>
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="webMainCard-container">
        <div className="web-card">
          <div className="webCard-image" id="WebCardImg">
            <img src={Card_img_4} alt="image" />
          </div>
          <div className="web-card-text">
            <div className="web-card-title">
              <h1>Builder</h1>
            </div>
            <div className="web-card-p">
              <p>
                Connects users with local contractors based on their location
              </p>
            </div>
          </div>
        </div>
        <div className="web-card">
          <div className="webCard-image" id="WebCardImg">
            <img src={Card_img_5} alt="image" />
          </div>
          <div className="web-card-text">
            <div className="web-card-title">
              <h1>Blogr</h1>
            </div>
            <div className="web-card-p">
              <p>
                Blogr is a platform for creating an online blog or publication
              </p>
            </div>
          </div>
        </div>
        <div className="web-card">
          <div className="webCard-image" id="WebCardImg">
            <img src={Card_img_6} alt="image" />
          </div>
          <div className="web-card-text">
            <div className="web-card-title">
              <h1>Camp</h1>
            </div>
            <div className="web-card-p">
              <p>
                Get expert training in coding, data, design, and digital
                marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebMainCards;
