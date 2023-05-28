import React from "react";
import "./App.css";
import MyFooter from "./components/Footer/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyLayout from "./components/Layout/MyLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/container/HomePage";

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
