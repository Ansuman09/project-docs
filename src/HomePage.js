import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
//images import
import instaclone from "./instaclone.png";
import mapnavigation from "./mapnavigation.png";

const HomePage=()=>{
    const nav = useNavigate();
    

    return(
        <div>
            <NavBar/>
        
        <div className="home-description">
            <p>
                Hey there! this is Ansuman. On this blog, I have showcased some of the personal projects that i have been working on. 
                Feel free to explore the website and let me know if you would like to see any improvements.
            </p>
            
            <div className="posts-container">
                <div className="post-container" onClick={()=>(nav("insta-clone"))}>
                    <h2>A Instagram Clone</h2>
                    <img src={instaclone} alt="instaclone image"/>
                    <p>Languages: Java:SpringBoot,MYSQL,JavaScript:React</p>
                </div>

                <div className="post-container">
                    <h2>A Navigation App</h2>
                    <img src={mapnavigation}/>
                    <p>Languages: C++,SpringBoot,JavaScript</p>
                </div>
            </div>
        </div>
        </div> 
    )
};

export default HomePage;