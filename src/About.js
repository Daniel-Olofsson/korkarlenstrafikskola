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
        <p>Körkarlens trafikskola är en trafikskola där du får ditt körkort snabbt, enkelt och billigt med hög kvalitet.</p>
        <p>Vi erbjuder på Körkarlens trafikskola:</p>
        <li>✓ Alltid mycket låga och konkurrenskraftiga priser</li>
        <li>✓ Hög kvalitet i undervisningen</li>
        <li>✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar en bra miljö för en god inlärning</li>
        <li>✓ Vi har även ADR utbildningar.</li>
        <li>✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)</li>
    </ul>
    </div>
    
    <h2 className="about-h">Våra anställda</h2>
<div class="row">
  <div class="col-sm-12" className="card-col">
    <div class="card">
    <img src={TestImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Namn: .</h5>
        <p class="card-text">Telefon nr: .</p>
        <a href="#" class="btn btn-primary">Kontakta mig</a>
      </div>
    </div>
    <div class="card">
    <img src={TestImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Namn: .</h5>
        <p class="card-text">Telefon nr: .</p>
        <a href="#" class="btn btn-primary">Kontakta mig</a>
      </div>
    </div>
    <div class="card">
    <img src={TestImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Namn: .</h5>
        <p class="card-text">Telefon nr: .</p>
        <a href="#" class="btn btn-primary">Kontakta mig</a>
      </div>
    </div>
    
    
  </div>
<div class="col-sm-12" className="card-col">
    <div class="card">
    <img src={TestImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Namn: .</h5>
        <p class="card-text">Telefon nr: .</p>
        <a href="#" class="btn btn-primary">Kontakta mig</a>
      </div>
    </div>
    <div class="card">
    <img src={TestImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Namn: .</h5>
        <p class="card-text">Telefon nr: .</p>
        <a href="#" class="btn btn-primary">Kontakta mig</a>
      </div>
    </div>
    <div class="card">
    <img src={TestImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Namn: .</h5>
        <p class="card-text">Telefon nr: .</p>
        <a href="#" class="btn btn-primary">Kontakta mig</a>
      </div>
    </div>
  </div>
</div>




    
    <h2>Har du frågor?</h2>
    <p>Ring gärna oss på 0700-90 72 10 eller <a href="mailto:korkarlens.trafikskola@hotmail.com">mail</a>
    </p>
    
    </div>
    );
    }
}

export default About;