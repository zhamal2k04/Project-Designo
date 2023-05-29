import React from "react";
import "../AppLinkedCards/AppLinkedCards.css";

const AppLinkedCards = () =>{
    return(
        <div className="appLinkedCard-container">
            <div className="appLinkedCard-left-container">
                <section className="appLinkedCard-img-0">
                    <h1>Web Design</h1>
                    <p>View Projects <span style={{color: "chocolate"}}>→</span></p>
                </section>
                <div className="appLinkedCard-right-container">
                    <section className="appLinkedCard-img-1">
                    <h1>App Design</h1>
                    <p>View Projects <span style={{color: "chocolate"}}>→</span></p>
                    </section>
                </div>
                <section className="appLinkedCard-img-2">
                <h1>Graphic Design</h1>
                <p>View Projects <span style={{color: "chocolate"}}>→</span></p>
                </section>
            </div>
        </div>
    )
}
export default AppLinkedCards;