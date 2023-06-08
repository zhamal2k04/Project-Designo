import React from 'react';
import LoginCard from '../components/LoginCard/LoginCard';
import LowerLocation from '../components/LowerLocation/LowerLocation';
import "../container/LoginPage.css";
const LoginPage = () => {
  return (
    <div className='loginPage-container'>
        <LoginCard/>
        <LowerLocation />
    </div>
  )
}

export default LoginPage;