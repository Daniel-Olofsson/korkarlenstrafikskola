import React, {} from "react";
import "./home.css";
import Tabbed from "./components/Tabbed"


import Banner from "../src/components/images/logo.png";
import XmasImageTwo from "../src/components/images/banner.png";
import DemoCarousel from "./components/carousel/carousel";



const Home = () =>  {
    
    
    return (
      <div>
        
        <div className="image-wrapper">
            
             <img
            src={Banner}
            className="image-banner"
            alt="autumndrive"/>

        <div style={{  position: 'relative', maxWidth: '100%', margin: '0 auto', }} className="carousel-wrapper">
            {/*<DemoCarousel images={Slides}/>*/}
        </div>
        </div>
        
        <div className="home-content">

            
            
            
            
            {/*<div className="special-offers">
                    <h4 className="offer-heading">Hösterbjudande B-Körkort</h4>
                    <ul className="offer-list">
                        <li className="offer-item">5 körlektioner för 2350 kr</li>
                        <li className="offer-item">10 lektioner för 4500 kr</li>
                        <li className="offer-item">20 körlektioner för 8950 kr</li>
                        <li className="offer-item">Prova på lektioner/nivå kontroll: 2 st körlektioner för 1000 kr</li>
                    </ul>
                <p className="offer-validity">Gäller från 1 september till 1 november</p>
            </div>*/}

            <div className="home-text">
                <h1 className="center-h">Information</h1>
                <p className="">
                Vi vill informera att i nuläget har vi gott om körlektioner med personbil mellan kl 8.30- 16.50. 
                </p>
                <p className="">
                Vi har också kurser som handledarkurs och riskettan. {/*<li className="red">Nästa handledarkurs är torsdag 11/11 kl 17.00.</li>*/}</p>
                <p className="">
                    Perfekt tillfälle att övningsköra nu när Julen och det nya året startar.
                </p>
                <p className="">Ring gärna oss på 0700-907210 eller maila dagar och tider önskemål till</p>
                <a href="mailto: korkarlens.trafikskola@hotmail.com">korkarlens.trafikskola@hotmail.com</a>
                <p>Maila eller ring oss för frågor om exempelvis pris.</p>
                <p className="mb-1">Mvh personalen</p>
            </div>
           
            <hr></hr>

            <div className="about">
            <h3 className="center-h mb-3">Vi erbjuder på Körkarlens trafikskola</h3>
                <ul className="about-ul">
                    <li className="center-li">✓ Alltid mycket låga och konkurrenskraftiga priser</li><br></br>
                    <li className="center-li">✓ Hög kvalitet i undervisningen</li><br></br>
                    <li className="center-li">✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar en bra miljö för en god inlärning</li><br></br>
                    <li className="center-li">✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)</li>
                    <li className="center-li">✓ Vi har lärare som pratar engelska och arabiska</li>
                </ul>
            </div>
            <hr></hr>
            <div className="container">
           
            <h2 className="center-h">Våra utbildningar</h2>
            <Tabbed/>
                
            </div>
        </div>
    </div>
    );
    }


export default Home;