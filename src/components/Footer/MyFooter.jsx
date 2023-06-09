import React from "react";
import "../Footer/MyFooter.css";
import fcb from "../Images/fcb.svg";
import yt from "../Images/yt.svg";
import twttr from "../Images/twttr.svg";
import pintrst from "../Images/pintrst.svg";
import inst from "../Images/inst.svg"
const MyFooter = () => {
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
            <hr />
            <div className="footer-description">
                <div className="footer-address">
                    <ul>
                        <li>Designo Central Office</li>
                        <li>3886 Wellington Street</li>
                        <li>Toronto, Ontarino M9C 3J5</li>
                    </ul>
                </div>
                <div className="footer-contacts">
                    <ul>
                        <li>Designo Central Office</li>
                        <li>P: +1 253-863-8967</li>
                        <li>M: contact@designo.com</li>
                    </ul>
                </div>
                <div className="footer-social-links">
                    <a href="https://www.facebook.com" target='_blank'>
                        <img src={fcb} alt="soc-logo" />
                    </a>
                    <a href="https://www.youtube.com" target='_blank'>
                        <img src={yt} alt="soc-logo" />
                    </a>
                    <a href="https://www.twitter.com" target='_blank'>
                        <img src={twttr} alt="soc-logo" />
                    </a>
                    <a href="https://www.pinterest.com" target='_blank'>
                        <img src={pintrst} alt="soc-logo" />
                    </a>
                    <a href="https://www.instagram.com" target='_blank'>
                        <img src={inst} alt="soc-logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;