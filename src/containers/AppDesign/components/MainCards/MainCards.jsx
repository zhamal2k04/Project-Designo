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
                </div>
            </div>
        </div>
    )
}
export default MainCards;