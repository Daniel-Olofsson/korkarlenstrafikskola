import React, { Component } from "react";
import "./home.css";

class Home extends Component {
    render() {
    return (
        
      <div>
     
        <div className="home-text">
            
        <h2 className="center-h">Nyheter</h2>
        <p>Vi har nästa Risketta kurs söndagen den 20/11 kl 15.00 600 kr/ per/person. finns platser kvar ring 0700-907210 för bokning eller maila namn och telefon nummer till korkarlens.trafikskola@hotmail.com
        </p>
        <p>Förövrigt så vill vi informera att vi har gott om tider till körlektioner personbil, mellan kl 08.30-16.50 ring oss gärna på 0700-907210 eller maila dagar och tider önskemål till korkarlens.
        trafikskola@hotmail.com. Maila eller ring oss för frågor om exempelvis pris.</p>
    <h2 className="center-h">Våra fordon</h2>
    </div>
    <hr></hr>
        <div className="image-container">
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
               

            </div>
        </div>
        


        <hr></hr>
        <h2>Vilka är vi?</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
    </div>
    );
    }
}

export default Home;