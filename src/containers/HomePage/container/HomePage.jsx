import React from "react";
import "../container/HomePage.css";
import TopCard from "../components/TopCard/TopCard";
import LowerInfos from "../components/LowerInfos/LowerInfos";
import LinkedCards from "../components/LinkedCards/LinkedCards";
import LowerCard from "../components/LowerCard/LowerCard";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <TopCard />
      <LinkedCards />
      <LowerInfos/>
      <LowerCard/>
    </div>
  );
};
export default HomePage;
