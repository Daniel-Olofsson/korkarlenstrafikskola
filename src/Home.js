import React, { Component } from "react";
import "./home.css";
import Tabbed from "./components/Tabbed"

class Home extends Component {
    render() {
    return (
      <div>
        <div className="home-text">
            <h1 className="centerText">Information</h1>
            <br></br>
            <p className="lh-base">
                Förövrigt så vill vi informera att vi har gott om tider till körlektioner personbil, 
                mellan kl 08.30-16.50. 
                
            </p>
            <p className="1h-base">Ring gärna oss på 0700-907210 eller maila dagar och tider önskemål till <a href="mailto: korkarlens.trafikskola@hotmail.com">korkarlens.trafikskola@hotmail.com</a>. 
                Maila eller ring oss för frågor om exempelvis pris.</p>
            <p>Mvh Körkarlens Trafikskola</p>
            <br></br>
            <hr></hr>
            
            
            <div className="">
            <h3 className="center h">Vi erbjuder på Körkarlens trafikskola</h3>
                <br></br>
                <ul>
                <div className="about-li">
                    <li>✓ Alltid mycket låga och konkurrenskraftiga priser</li><br></br>
                    <li>✓ Hög kvalitet i undervisningen</li><br></br>
                    <li>✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar en bra miljö för en god inlärning</li><br></br>
                    <li>✓ Vi har även ADR utbildningar.</li><br></br>
                    <li>✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)</li><br></br><br></br>
                </div>
                </ul>
            </div>
            <hr></hr>
            <div>
                <h2>Våra utbildningar</h2>
                <Tabbed/>
            </div>
        </div>
    </div>
    );
    }
}

export default Home;