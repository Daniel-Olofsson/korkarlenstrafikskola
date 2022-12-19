import React, { Component } from "react";
import "./about.css"
import TestImage from "./components/images/human.jpg"

class About extends Component {
    render() {
    return (
    <div>
    <h1>
        Om oss
    </h1>
    <div className="about-us">
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
                </div>
            
           
                                        

                </div>
    <p className="center-h">Besök oss på Sägengatan 31, eller ring gärna oss på 0700-90 72 10 eller <a href="mailto:korkarlens.trafikskola@hotmail.com">mail</a>
    </p>
    
    </div>
    );
    }
}

export default About;