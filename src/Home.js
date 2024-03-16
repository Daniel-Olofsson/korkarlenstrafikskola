import React from "react";
import Tabbed from "./components/Tabbed";
import Offers from "./components/offers/offers";
import Banner from "../src/components/images/logo.png";
import TextTruncate from "react-text-truncate";

const Home = () => {
  return (
    <div>
      <div className="image-wrapper">
        <img src={Banner} className="image-banner" alt="autumndrive" />

        <div
          style={{ position: "relative", maxWidth: "100%", margin: "0 auto" }}
          className="carousel-wrapper"
        >
          {/*<DemoCarousel images={Slides}/>*/}
        </div>
      </div>

      <div className="home-content">
        <div className="home-text">
          <h1 className="center-h">Information</h1>
          <p className="">
            Vi vill informera att i nuläget har vi gott om körlektioner med
            personbil mellan kl 8.30- 16.50.
          </p>
          <p className="">
            Vi har också kurser som handledarkurs och riskettan.{" "}
            {/*<li className="red">Nästa handledarkurs är torsdag 11/11 kl 17.00.</li>*/}
          </p>
          <p>Perfekt tillfälle att övningsköra nu när sommaren närmar sig.</p>
          <p>
            Perfekt tillfälle att övningsköra nu när sommaren närmar sig. Ring
            gärna oss på 0700-907210 eller maila dagar och tider önskemål till{" "}
            <TextTruncate
              line={1}
              element="span"
              truncateText=""
              text="korkarlens.trafikskola@hotmail.com"
              textTruncateChild={
                <a href="mailto:korkarlens.trafikskola@hotmail.com">
                  korkarlens.trafikskola@hotmail.com
                </a>
              }
              containerClassName="email-link"
            />
          </p>

          <p>Maila eller ring oss för frågor om exempelvis pris.</p>
          <p className="email-link">Mvh personalen</p>
        </div>
        <Offers
          offerTitle="Erbjudande"
          offerContent="Nu i mars erbjuder vi 10 % rabatt på ett valfritt körpaket (personbil)"
        />
        <div className="divider"></div>

        <div className="about">
          <h3 className="center-h mb-3">
            Vi erbjuder på Körkarlens trafikskola
          </h3>
          <ul className="about-ul">
            <li className="center-li">
              ✓ Alltid mycket låga och konkurrenskraftiga priser
            </li>
            <li className="center-li">✓ Hög kvalitet i undervisningen</li>
            <li className="center-li">
              ✓ En trevlig och avspänd atmosfär på trafikskolan, vilket skapar
              en bra miljö för en god inlärning
            </li>
            <li className="center-li">
              ✓ Vi erbjuder även utbildning för Yrkesförarkompetens (YKB)
            </li>
            <li className="center-li">
              ✓ Vi har lärare som pratar engelska och arabiska
            </li>
          </ul>
        </div>
        <div className="divider"></div>

        <div className="">
          <h2 className="center-h m-3">Våra utbildningar</h2>
          <Tabbed />
        </div>
      </div>
    </div>
  );
};

export default Home;
