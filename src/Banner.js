import React from 'react';
import "./Banner.css";

function Banner() {
    return (
        <header className='banner' 
                style={{
                    backgroundImage: `url('https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fnetflix-orders-one-piece-live-action-series-tomorrow-studios-info-001.jpg?q=90&w=1400&cbr=1&fit=max')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    }}>

            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
            </div>
        </header>
    )
}

export default Banner
