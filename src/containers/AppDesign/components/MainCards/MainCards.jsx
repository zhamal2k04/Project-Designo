import React from "react";
import "../MainCards/MainCards.css";
import card_img_1 from "../images/app-card-2.svg";
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

            </div>
        </div>
    )
}
export default MainCards;