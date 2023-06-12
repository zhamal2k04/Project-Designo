import React from "react";
import { Link } from "react-router-dom";
import "./MyNavbar.css";
import user_logo from "../Images/user.svg"
const MyNavbar  =() =>{
    return(
        <div className="navbar-container">
            <div className="nav-link">
                <div className="logo">
                    <div className="oval"></div>
                    <Link to={"/home"}>Designo</Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <Link to={"/login"} id="user-logo">
                            <img src={user_logo} alt="usr-logo" />
                        </Link>
                        <Link to={"/about-us"}>Our Company</Link>
                        <Link to={'/our-locations'}>Locations</Link>
                        <Link to={"/contacts"}>Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyNavbar;