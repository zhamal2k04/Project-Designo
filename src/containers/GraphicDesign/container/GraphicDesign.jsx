import React from "react";
import GraphicLinkedCards from "../components/GraphicLinkedCards/GraphicLinkedCards";
import GraphicLowerCard from "../components/GraphicLowerCard/GraphicLowerCard";
import GraphicMainCard from "../components/GraphicMainCard/GraphicMainCard";
import GraphicTopCard from "../components/GraphicTopCard/GraphicTopCard";
import "../container/GraphicDesign.css";


const GraphicDesign = () =>{
    return(
        <div className="graphicDesign-container">
            <GraphicTopCard/>
            <GraphicMainCard/>
            <GraphicLinkedCards/>
            <GraphicLowerCard/>
        </div>
    )
}

export default GraphicDesign;