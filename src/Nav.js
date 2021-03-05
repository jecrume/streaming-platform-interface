import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {

    /**Create state and event handlingfor nav bar */
const [show, handleshow] = useState(false);

    /**When scrolling more than 100 px, hide navbar */
const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleshow(true);
    } else {
        handleshow(false);
    }
}
 
    /**Crete event listernet for nav bar scrolling */
useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
},[]);

return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">

            <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="C:\Users\John Crume\Documents\stream-platform-interface\public\assets\images\Netflix_Logo_RGB.png"/>
            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

            </div>


            
        </div>
    )
}

export default Nav
