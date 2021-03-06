import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row"


function HomeScreen() {
    return (
        <div className="homeScreen">
            {/*Navigation Bar */}
            <Nav />

            {/*Banner */}
            <Banner />

            {/*Row */}

            <Row title= "NETFLIX ORIGINALS" fetchUrl ={requests.fetchNetflixOriginals} isLargeRow />
            <Row title= "Trending" fetchUrl ={requests.fetchTrending}/>
            
            <Row title= "Top Rated" fetchUrl ={requests.fetchTopRated}/>
            <Row title= "Action" fetchUrl ={requests.fetchActionMovies}/>
            <Row title= "Adventure" fetchUrl ={requests.fetchAdventureMovies}/>
            <Row title= "Comedy" fetchUrl ={requests.fetchComedyMovies}/>
            <Row title= "Sci-Fi" fetchUrl ={requests.fetchSciFiMovies}/>
            <Row title= "Fantasy" fetchUrl ={requests.fetchFantasyMovies}/>
            <Row title= "Horror" fetchUrl ={requests.fetchHorrorMovies}/>
            <Row title= "Mystery" fetchUrl ={requests.fetchMysteryMovies}/>
            <Row title= "Romance" fetchUrl ={requests.fetchRomanceMovies}/>
            <Row title= "Thriller" fetchUrl ={requests.fetchThrillerMovies}/>
            <Row title= "Crime" fetchUrl ={requests.fetchCrimeMovies}/>
            <Row title= "Documentary" fetchUrl ={requests.fetchDocumentaries}/>

        
            
        </div>
    )
}

export default HomeScreen
