import React from "react";
import NavBar from "./NavBar";

const InstaCloneAppDescription=()=>{
    return(
        <div>
            <NavBar />
            <div className="page-navigation-container">
                <div className="path-choice-container">
                    <p><b>App Architecture</b></p>
                </div>
                <div className="path-choice-container">
                    <p><b>Database:MYSQL</b></p>
                </div>
                <div className="path-choice-container">
                    <p><b>Database Connect</b></p>
                </div>
                <div className="path-choice-container">
                    <p><b>Spring Authentication</b></p>
                </div>
                <div className="path-choice-container">
                    <p><b>Spring API </b></p>
                </div>
                <div className="path-choice-container">
                    <p><b>Deploying</b></p>
                </div>
            </div>
        </div>
    )
}

export default InstaCloneAppDescription;