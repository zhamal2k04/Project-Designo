import React from "react";
import WebMainCards from "../components/WebMainCards/WebMainCards";
import WebTopCard from "../components/WebTopCard/WebTopCard";
import "../container/WebDesign.css";

const WebDesign = () =>{
    return (
        <div className="webDesign-container">
            <WebTopCard/>
            <WebMainCards/>
        </div>
    )
}

export default WebDesign;