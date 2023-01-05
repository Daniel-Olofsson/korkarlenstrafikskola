import React, { Component } from "react";
import "./about.css"
import TestImage from "./components/images/human.jpg"

class About extends Component {
    render() {
    return (
    <div>
    <h1>Om oss</h1>

    <h2 className="center-h">Vilka är vi?</h2>
        <p>Körkarlens Trafikskola är en enskild firma vars verksamhet är trafikskola med körlektioner för personbil,
            lastbil,lastbil med släp,bil med släp och buss och teori.
             Ykb-utbildningar och ADR.</p>
        <p>Kom gärna till kontoret till Sägengatan och besök oss!</p>

    <h2 className="center-h">Har du frågor?</h2>
    <div className="center h">
        <br></br>
        <div className="container-about">
            <img src={require('./components/images/car-images/IMG_FRAMSIDA.JPG')} className="rounded-circle mx-auto d-block" alt="front door"/>
            <p className="center-h">Besök oss på Sägengatan 31, eller ring gärna oss på 0700-90 72 10 eller <a href="mailto:korkarlens.trafikskola@hotmail.com">mail</a></p>
        </div> 
    </div>
        <h2 className="center-h">Våra fordon</h2>
        <div className="image-container">
            <p>Vi använder oss av ett flertal nya volkswagen för personbil och har diverse tyngre fordon för övriga utbildningar</p>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6871.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6881.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6888.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6890.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6891.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6892.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6895.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6897.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/Vit automat 2.jpg')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6903.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_FORDON1.jpg')} className="gallery-image" alt="cars"/>                    

                </div>
                <div className="gallery-item">
                    <img src={require('./components/images/car-images/IMG_6901.JPG')} className="gallery-image" alt="cars"/>                    

                </div>
            </div>
        </div>
    </div>

    
    );
    }
}

export default About;