import React, { Component } from "react";
import "./home.css";
import Tabbed from "./components/Tabbed"

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
            <p className="lh-base">
                Förövrigt så vill vi informera att vi har gott om tider till körlektioner personbil, mellan kl 08.30-16.50 ring oss gärna på 0700-907210 eller maila dagar och tider önskemål till korkarlens.
                trafikskola@hotmail.com. Maila eller ring oss för frågor om exempelvis pris.
            </p>
            
            <hr></hr>

            <div className="">
            <ul>
            <p>Trafiklärarna på Körkarlens trafikskola är välutbildade och duktiga på sina arbetsuppgifter.</p> 
                <p>Vi har x lärare, Vi har x fordon, med x erfarenhet och funnits sedan 2005</p>
                <p>Vi erbjuder på Körkarlens trafikskola:</p><br></br>
                
                <br></br>
                <div className="about-li">
                    <li>✓ Alltid mycket låga och konkurrenskraftiga priser</li>
                    <li>✓ Hög kvalitet i undervisningen</li>'<br></br><br></br>
                    <li>✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar en bra miljö för en god inlärning</li><br></br><br></br>
                    <li>✓ Vi har även ADR utbildningar.</li><br></br><br></br>
                    <li>✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)</li><br></br><br></br>
                </div>
                
            </ul>
            </div>

            <hr></hr>
            <div>
                <h2>Våra utbildningar</h2>
                <Tabbed/>
            </div>

            <hr></hr>
        </div>
    </div>
    );
    }
}

export default Home;