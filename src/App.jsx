import React from "react";
import "./App.css";
import MyLayout from "./components/Layout/MyLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/container/HomePage";
import AppDesign from "./containers/AppDesign/container/AppDesign";
import WebDesign from "./containers/WebDesign/container/WebDesign";
import GraphicDesign from "./containers/GraphicDesign/container/GraphicDesign";
import AboutUs from "./containers/AboutUs/container/AboutUs";
import OurLocations from "./containers/Locations/container/OurLocations";

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/app-design" element={<AppDesign/>}/>
          <Route path="/web-design" element={<WebDesign/>}/>
          <Route path="/graphic-design" element={<GraphicDesign/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/our-locations" element={<OurLocations/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
