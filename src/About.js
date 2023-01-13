import React, { Component } from "react";
import "./about.css"
import TestImage from "./components/images/human.jpg"

class About extends Component {
    render() {
    return (
<div>
    <h1 className="centerText">Om oss</h1><br></br>
    <h3 className="center-h">Vilka är vi?</h3>
        <p>Körkarlens Trafikskola är en enskild firma vars verksamhet är trafikskola med körlektioner för personbil,
            lastbil,lastbil med släp,bil med släp och buss och teori.
             Ykb-utbildningar och ADR.</p>
             <p>Vi har funnits sedan 2005.</p>
        <hr></hr>
        <h3 className="center-h">Våra lärare</h3>
        <p className="">Vi har flera skickliga och professionella trafiklärare på Körkarlens trafikskola och dom har många års erfarenhet.</p>
        <p>Kom gärna till kontoret till Sägengatan och besök oss!</p>
        <hr></hr>
        <h2 className="center-h">Våra fordon</h2>
        <p>Vi använder oss av ett flertal nya volkswagen för personbil och har diverse tyngre fordon för övriga utbildningar</p>
        <br></br>
        
        
        <div className="margin-auto">
        
        
            <div class="row">
                <div class="col-lg-3">
                    <img
                    src={require('./components/images/car-images/IMG_6901.JPG')}
                    class="w-100 shadow-1-strong rounded mb-2"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_FORDON1.jpg')}
                    class="w-100 shadow-1-strong rounded mb-2"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3">
                    <img
                    src={require('./components/images/car-images/Vit automat 2.jpg')}
                    class="w-100 shadow-1-strong rounded mb-2"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6897.JPG')}
                    class="w-100 shadow-1-strong rounded mb-2"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3 mb-4 mb-lg-0">
                    <img
                    src={require('./components/images/car-images/IMG_6895.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6892.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3 mb-4 mb-lg-0">
                    <img
                    src={require('./components/images/car-images/IMG_6881.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6888.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3 mb-4 mb-lg-0">
                    <img
                    src={require('./components/images/car-images/IMG_6891.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6890.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3 mb-4 mb-lg-0">
                    <img
                    src={require('./components/images/car-images/IMG_FORDON2.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6916.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3">
                    <img
                    src={require('./components/images/car-images/IMG_6909.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6910.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />
                </div>
                <div class="col-lg-3">
                    <img
                    src={require('./components/images/car-images/IMG_6871.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />

                    <img
                    src={require('./components/images/car-images/IMG_6903.JPG')}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="car"
                    />
                </div>
            </div>
        <hr></hr>
        </div>
        
        <h2 className="center-h">Har du frågor?</h2>
    <div className="center h">
        <br></br>
        <div className="container-about">
            <img src={require('./components/images/car-images/IMG_FRAMSIDA.JPG')} className="rounded-circle mx-auto d-block" alt="front door"/>
            <p className="center-h">Besök oss på Sägengatan 31, eller ring gärna oss på 0700-90 72 10 eller <a href="mailto:korkarlens.trafikskola@hotmail.com">mail</a></p>
        </div>
         
    </div>


</div>

    
    );
    }
}

export default About;