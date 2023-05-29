import React from "react";
import "../container/AppDesign.css";
import AppTopCard from "../components/AppTopCard/AppTopCard";
import MainCards from "../components/MainCards/MainCards";
const AppDesign = () => {
  return (
    <div className="appDesign-container">
        <AppTopCard/>
        <MainCards/>
    </div>
  );
};

export default AppDesign;
