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

            <div class="container">
                <div className="row"></div>
                    <div className="col-lg-12">
                        <img
                        src={require('./components/images/pexel-easter.jpg')}
                        class="img-responsive center-block d-block mx-auto"
                        alt="car"
                        />
                    </div> <br></br>
                <h2>PÅSKERBJUDANDE</h2>
                <br></br>
                <ul>
                    <li className="">Påskpaket 1. Fem körlektioner för 2200 kr (ink vägmärkes boken).</li> <br></br>
                    <li>Påskpaket 2. Tio körlektioner för 4400 kr (ink vägmärkes boken och ett vallfritt häfte).</li> <br></br>
                    <li>Påskpaket 3. Tjugo körlektioner för 8700 kr (ink vägmärkes boken, körkortsboken, ett vallfritt häfte, samt teroi online).</li> <br></br>
                    <li>Påskdeal: 2st körlektioner för 930 kr.</li>
                </ul>
                <p>Gäller från 28:e mars till april 17.</p>
                <br></br>
            </div>


            <div class="container">
                <div className="row"></div>
                    <div className="col-lg-12">
                        <img
                        src={require('./components/images/pexel-happy-easter.jpg')}
                        class="img-responsive center-block d-block mx-auto"
                        alt="car"
                        />
                    </div> <br></br>
                <h2>EASTER OFFER!</h2>
                <br></br>
                <ul>
                    <li className="">Offer 1. Five driving lessons for SEK 2200 (including the road sign book).</li> <br></br>
                    <li>Offer 2. Ten driving lessons for SEK 2200 (including the road sign book and an optional driving bookleet).</li> <br></br>
                    <li>Offer 3. Twenty driving lessons for SEK 2200 (including the road sign book, driver's license book and an optional driving booklet as well as theory online.).</li> <br></br>
                    <li>Easter deal: Two driving lessons for 930 kr.</li>
                </ul>
                <p>Valid from march 28 to april 17.</p>
                <br></br>
            </div>
            <h3>Övrigt</h3>
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