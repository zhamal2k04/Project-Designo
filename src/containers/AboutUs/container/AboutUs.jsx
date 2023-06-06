import React from "react";
import LocationCards from "../components/LocationCards/LocationCards";
import LowerCard from "../components/Lower-Card/LowerCard";
import LowerContent from "../components/LowerContent/LowerContent";
import MainContent from "../components/MainContent/MainContent";
import CardTop from "../components/Top-Card/CardTop";
import "../container/AboutUs.css";

const AboutUs = () =>{
    return(
        <div className="aboutUs-container">
            <CardTop/>
            <MainContent/>
            <LocationCards/>
            <LowerContent/>
            <LowerCard/>
        </div>
    )
}

export default AboutUs;