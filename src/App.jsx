import React from "react";
import "./App.css";
import MyFooter from "./components/Footer/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyLayout from "./components/Layout/MyLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/container/HomePage";
import AppDesign from "./containers/AppDesign/container/AppDesign";

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/app-design" element={<AppDesign/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
