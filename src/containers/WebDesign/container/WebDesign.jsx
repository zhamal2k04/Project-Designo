import React from "react";
import WebLinkedCards from "../components/WebLinkedCards/WebLinkedCards";
import WebLowerCard from "../components/WebLowerCard/WebLowerCard";
import WebMainCards from "../components/WebMainCards/WebMainCards";
import WebTopCard from "../components/WebTopCard/WebTopCard";
import "../container/WebDesign.css";

const WebDesign = () => {
  return (
    <div className="webDesign-container">
      <WebTopCard />
      <WebMainCards />
      <WebLinkedCards />
      <WebLowerCard/>
    </div>
  );
};

export default WebDesign;
