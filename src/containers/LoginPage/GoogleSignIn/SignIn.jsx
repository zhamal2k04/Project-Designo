import React from "react";
import { auth, provider } from "./MyConfig"
import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react'
import google_icon from "../images/google-icon.png";
import "../components/LoginCard/LoginCard.css";
import LogOut from "./LogOut/LogOut";

const SignIn = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("Email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("Email"))
    })

    return (
        <div>
            {value ? <LogOut /> :
                <button onClick={handleClick} id='google-btn'>
                    <img src={google_icon} alt="icon" />
                    <span>Sign up with Google</span>
                </button>
            }
        </div>
    )
}

export default SignIn;