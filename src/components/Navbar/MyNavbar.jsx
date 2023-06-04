import React from "react";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

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
                        <Link to={"/about-us"}>Our Company</Link>
                        <Link to={'/our-locations'}>Locations</Link>
                        <Link>Contacts</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyNavbar;