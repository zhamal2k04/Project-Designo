import React from "react";
import "../MainCards/MainCards.css";
import card_img_1 from "../images/app-card-1.svg";
import card_img_2 from "../images/app-card-2.svg";
import card_img_3 from "../images/app-card-3.svg";
import card_img_4 from "../images/app-card-4.svg";
import card_img_5 from "../images/app-card-5.svg";
const MainCards = () =>{
    return(
        <div className="mainCard-handler">
            <div className="mainCard-container">
                <div className="app-card">
                    <div className="card-image">
                        <img src={card_img_1} alt="image" />
                    </div>
                    <div className="app-card-text">
                        <div className="app-card-title">
                            <h1>Express</h1>
                        </div>
                        <div className="app-card-p">
                        <p>Solving the problem of poor indoor air quality by filtering the air</p>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="card-image" id="cardNum2">
                        <img src={card_img_2} alt="image" />
                    </div>
                    <div className="app-card-text">
                        <div className="app-card-title">
                            <h1>Eyecam</h1>
                        </div>
                        <div className="app-card-p">
                        <p>Product that lets you edit your favorite photos and videos at any time</p>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="card-image" id="cardNum3">
                        <img src={card_img_3} alt="image" />
                    </div>
                    <div className="app-card-text">
                        <div className="app-card-title">
                            <h1>Faceit</h1>
                        </div>
                        <div className="app-card-p">
                        <p>Get to meet your favorite internet superstar with the faceit app</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainCard-container">
                <div className="app-card" id="cardNum4">
                    <div className="card-image">
                        <img src={card_img_4} alt="image" />
                    </div>
                    <div className="app-card-text">
                        <div className="app-card-title">
                            <h1>Todo</h1>
                        </div>
                        <div className="app-card-p">
                        <p>A todo app that features cloud sync with light and dark mode</p>
                        </div>
                    </div>
                </div>
                <div className="app-card">
                    <div className="card-image" id="cardNum5">
                        <img src={card_img_5} alt="image" />
                    </div>
                    <div className="app-card-text">
                        <div className="app-card-title">
                            <h1>Loopstudios</h1>
                        </div>
                        <div className="app-card-p">
                        <p>A VR experience app made for <br /> Loopstudios</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainCards;