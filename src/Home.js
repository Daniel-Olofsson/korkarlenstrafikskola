import React, { Component } from "react";
import "./home.css";

class Home extends Component {
    render() {
    return (
        
      <div>
     
        <div className="home-text">
            
        <h2 className="center-h">Information</h2>
        <h3 className="center-h">Jul Erbjudande </h3>
        <p className="lh-base">
            5 körlektioner för 2250 kr ( ink vägmärkesbok)
            10 körlektioner för 4300 kr ( ett körhäfte och vägmärkesboken)
            Intensiv paketet 20 körlektioner för 8700 kr ( körkortsboken och vägmärkesboken och teoritester från datan)
            Gäller från 1 december, 31 januari 2023. 
        </p>
        <p className="lh-base">Förövrigt så vill vi informera att vi har gott om tider till körlektioner personbil, mellan kl 08.30-16.50 ring oss gärna på 0700-907210 eller maila dagar och tider önskemål till korkarlens.
        trafikskola@hotmail.com. Maila eller ring oss för frågor om exempelvis pris.</p>
    <h2 className="center-h">Våra fordon</h2>
    </div>
    <hr></hr>
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
        


        <hr></hr>
        <h2 className="center-h">Vilka är vi?</h2>
        <p>Körkarlens Trafikskola är en enskild firma vars verksamhet är trafikskola med körlektioner för personbil,
            lastbil,lastbil med släp,bil med släp och buss och teori.
             Ykb-utbildningar och ADR.</p>
             <p>Kom gärna till kontoret till Sägengatan och besök oss!</p>
    </div>
    );
    }
}

export default Home;