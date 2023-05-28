import React from "react";
import "../Footer/MyFooter.css";

const MyFooter = () =>{
    return (
        <div className="footer-container">
                <div className="footer-frame">
                    <div className="footer-logo">
                        <div className="oval"></div>
                        <h1>Designo</h1>
                    </div>
                    <div className="footer-links">
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

export default MyFooter;