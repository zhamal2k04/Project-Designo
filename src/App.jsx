import React from 'react';
import './App.css';
import MyFooter from './components/Footer/MyFooter';
import MyNavbar from './components/Navbar/MyNavbar';
import MyLayout from './components/Layout/MyLayout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div>
      <MyNavbar />
      <MyFooter />
   </div>
  );
}

export default App;
