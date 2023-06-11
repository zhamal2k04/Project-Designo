import React from 'react';
import "./LowerLocation.css";
import { Link } from 'react-router-dom';
import locationImg1 from "../../images/Canada.svg";
import locationImg2 from "../../images/Australia.svg";
import locationImg3 from "../../images/UK.svg";
const LowerLocation = () => {
    return (
        <div className="lowerLocation-container">
            <div className="CardsHolder">
                <div className="CardNumber1">
                    <img src={locationImg1} alt="loc-img" />
                    <h1>Canada</h1>
                    <Link to={'/our-locations'}>
                        <button id="btn-loc">See Location</button>
                    </Link>
                </div>
                <div className="CardNumber1">
                    <img src={locationImg2} alt="loc-img" />
                    <h1>Australia</h1>
                    <Link to={'/our-locations'}>
                        <button id="btn-loc">See Location</button>
                    </Link>
                </div>
                <div className="CardNumber1">
                    <img src={locationImg3} alt="loc-img" />
                    <h1>United Kingdom</h1>
                    <Link to={"/our-locations"}>
                        <button id="btn-loc">See Location</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LowerLocation