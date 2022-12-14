import React, { Component } from "react";
import "./about.css"
import TestImage from "./components/images/human.jpg"

class About extends Component {
    render() {
    return (
    <div>
    <h2>
        Om oss
    </h2>
    <div className="about-us">
    <ul>
    <p>Trafiklärarna på Körkarlens trafikskola är välutbildade och duktiga på sina arbetsuppgifter.</p> 
        <p>Vi har x lärare, Vi har x fordon, med x erfarenhet och funnits sedan 2005</p>
        <p>Vi erbjuder på Körkarlens trafikskola:</p>
        <li>✓ Alltid mycket låga och konkurrenskraftiga priser</li>
        <br></br>
        <li>✓ Hög kvalitet i undervisningen</li>'<br></br>
        <li>✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar en bra miljö för en god inlärning</li><br></br>
        <li>✓ Vi har även ADR utbildningar.</li><br></br>
        <li>✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)</li><br></br>
    </ul>
    </div>





    
    <h2 className="center-h">Har du frågor?</h2>
    <p className="center-h">Ring gärna oss på 0700-90 72 10 eller <a href="mailto:korkarlens.trafikskola@hotmail.com">mail</a>
    </p>
    
    </div>
    );
    }
}

export default About;