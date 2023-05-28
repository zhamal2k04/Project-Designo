import React from "react";
import "../container/HomePage.css";
import TopCard from "../components/TopCard/TopCard";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <TopCard />
      <LinkedCards />
    </div>
  );
};
export default HomePage;
