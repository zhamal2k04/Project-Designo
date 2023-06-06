import React from "react";
import "../container/AppDesign.css";
import AppTopCard from "../components/AppTopCard/AppTopCard";
import MainCards from "../components/MainCards/MainCards";
import AppLinkedCards from "../components/AppLinkedCards/AppLinkedCards";
import AppLowerCard from "../components/AppLowerCard/AppLowerCard";
const AppDesign = () => {
  return (
    <div className="appDesign-container">
        <AppTopCard/>
        <MainCards/>
        <AppLinkedCards/>
        <AppLowerCard/>
    </div>
  );
};

export default AppDesign;
