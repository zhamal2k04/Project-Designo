import React from "react";
import LocLowerCard from "../components/LowerCard/LocLowerCard";
import LowerLocation from "../components/LowerLocation/LowerLocation";
import MiddleLocation from "../components/MiddleLocation/MiddleLocation";
import TopLocation from "../components/TopLocation/TopLocation";
import "../container/OurLocations.css";

const OurLocations = () =>{
    return(
        <div className="locations-container">
            <TopLocation/>
            <MiddleLocation/>
            <LowerLocation/>
            <LocLowerCard/>
        </div>
    )
}
export default OurLocations;