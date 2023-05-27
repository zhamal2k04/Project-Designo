import React from "react";
import "./MyNavbar.css";

const MyNavbar  =() =>{
    return(
        <div className="navbar-container">
            <div className="nav-link">
                <div className="logo">
                    <div className="oval"></div>
                    <p>Designo</p>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Our Company</li>
                        <li>Locations</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyNavbar;