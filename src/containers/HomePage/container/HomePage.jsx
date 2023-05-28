import React from "react";
import "../container/HomePage.css";
import TopCard from "../components/TopCard/TopCard";
import LowerInfos from "../components/LowerInfos/LowerInfos";
import LinkedCards from "../components/LinkedCards/LinkedCards";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <TopCard />
      <LinkedCards />
      <LowerInfos/>
    </div>
  );
};
export default HomePage;
