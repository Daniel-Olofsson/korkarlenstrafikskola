import React, { Component } from "react";
import "./about.css"
import TestImage from "./components/images/human.jpg"

class About extends Component {
    render() {
    return (
<div>
    <h1 className="centerText">Om oss</h1><br></br>
    <h3 className="bold-header">Vilka är vi?</h3>
        <p className="">Körkarlens Trafikskola är en enskild firma vars verksamhet är trafikskola med körlektioner för personbil,
            lastbil,lastbil med släp,bil med släp och buss och teori.
             YKB-utbildningar.</p>
             <p className="">Vi har funnits sedan 2005.</p>
        <hr></hr>
        <h3 className="bold-header">Våra lärare</h3>
        <p className="">Vi har flera pedagogiska och professionella trafiklärare som har många års erfarenhet och kunskap.</p>
        <p className="">Kom gärna och besök oss på vårt kontor Sägengatan 31 B!</p>
        <p className="">(Våra tyngre fordon finns på importgatan 30.)</p>
        <hr></hr>
        <h3 className="bold-header">Våra fordon</h3>
        <p className="">Vi använder oss av ett flertal nya Volkswagen för personbil och har diverse tyngre fordon för övriga utbildningar.</p>
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
        <div className="center-h">
            <div className="container-about">
                {/*<img src={require('./components/images/car-images/IMG_FRAMSIDA.JPG')} className="rounded-circle mx-auto d-block" alt="front door"/>*/}
                <p className="center-h">Besök oss på Sägengatan 31, eller ring gärna oss på 0700-90 72 10 eller <a href="mailto:korkarlens.trafikskola@hotmail.com">mail</a></p>
            </div>
            <section class="map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2129.271358840999!2d11.975965512844613!3d57.7458162366426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff4e84fc8324d%3A0x9bdc1e9fe20336b8!2sK%C3%B6rkarlens%20trafikskola!5e0!3m2!1ssv!2sse!4v1682273062321!5m2!1ssv!2sse" ></iframe>
            </section>
            
        </div>


</div>

    
    );
    }
}

export default About;