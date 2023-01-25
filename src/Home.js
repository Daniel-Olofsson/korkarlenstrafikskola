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
            <h3 className="center-h">Jul Erbjudande </h3>
            <p className="lh-base">5 körlektioner för 2250 kr (ink vägmärkesbok)</p>
            <p className="lh-base">10 körlektioner för 4300 kr (ett körhäfte och vägmärkesboken)</p>
            <p className="lh-base">
                Intensiv paketet 20 körlektioner för 8700 kr (körkortsboken och vägmärkesboken och teoritester från datan)
                Gäller från 1 december, 31 januari 2023. 
                </p>
            <p className="lh-base">
                Förövrigt så vill vi informera att vi har gott om tider till körlektioner personbil, 
                mellan kl 08.30-16.50 ring oss gärna på 0700-907210 eller maila dagar och tider önskemål till <a href="mailto: korkarlens.trafikskola@hotmail.com">korkarlens.trafikskola@hotmail.com</a>. Maila eller ring oss för frågor om exempelvis pris.
            </p>
            <div>
                <h3>
                    Handledarekurs på lördag
                </h3>
                <p>
                    Lördagen den 28/1 har vi handledarekurs klockan 11.00 på sägengatan 31b. 
                <p>
                    Det finns platser kvar, ring och boka på 0700-907210.
                </p>
                    250 kr per person.
                </p>
                <p>
                    Mvh Körkarlens trafikskola
                </p>
            </div>
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