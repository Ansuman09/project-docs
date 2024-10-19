import React from "react";
import { useNavigate } from "react-router-dom"; 
const HomePage=()=>{
    const nav = useNavigate();
    
    const handleOnClick=()=>{
        nav("/insta-clone");
    }

    return(
        <div>
            <p>This is my home page</p>
            <p onClick={handleOnClick}>insta clone</p>
        </div>

    )
};

export default HomePage;