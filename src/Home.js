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
            Vi vill informera att i nuläget har vi gott om körlektioner med personbil mellan kl 8.30- 16.50. 
            </p>
            <p>
            Perfekt tillfälle att övningsköra innan sommarperioden drar igång.
            </p>
            <p className="1h-base">Ring gärna oss på 0700-907210 eller maila dagar och tider önskemål till <a href="mailto: korkarlens.trafikskola@hotmail.com">korkarlens.trafikskola@hotmail.com</a>. 
                Maila eller ring oss för frågor om exempelvis pris.</p>
            <p>Mvh personalen</p>
            <br></br>
            <hr></hr>
            
   
            <div className="about">
            <h3 className="center h">Vi erbjuder på Körkarlens trafikskola</h3>
                <br></br>
                <ul className="about-ul">
                    <li className="center-li">✓ Alltid mycket låga och konkurrenskraftiga priser</li><br></br>
                    <li className="center-li">✓ Hög kvalitet i undervisningen</li><br></br>
                    <li className="center-li">✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar en bra miljö för en god inlärning</li><br></br>
                    <li className="center-li">✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)</li><br></br><br></br>
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