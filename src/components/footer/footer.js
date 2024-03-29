import React from "react";
import { Facebook } from "@mui/icons-material";

const footer = () => {
  return (
    <div>
      <div className="footer bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h5 className="title mb-3">Kontakt</h5>
              <address>
                <p className="m-1">Tlf: 0700 90 72 10</p>
                <p className="h6 m-1">
                  <small>
                    <a href="mailto:korkarlens.trafikskola@hotmail.com">
                      korkarlens.trafikskola@hotmail.com
                    </a>
                  </small>
                </p>
              </address>
            </div>
            <div className="col-md-4 col-sm-12">
              <h5 className="title mb-3">Öppettider</h5>
              <address>
                <div className="m-1">Måndag till torsdag 09.00 - 17.00,</div>
                <div className="m-1">Fredag 09.00 - 16:00</div>
                <div className="m-1">
                  Öppettider finns även på
                  <a
                    className="m-1"
                    href="https://www.google.com/search?q=k%C3%B6rkarlens+trafikskola+%C3%B6ppettider&client=firefox-b-d&sxsrf=AB5stBj5KocnGKlNYLM_FjqIoEpMo8na_A%3A1689002458220&ei=2iGsZL77DIfUxc8PiOmg0AY&ved=0ahUKEwi-0K-8uISAAxUHavEDHYg0CGoQ4dUDCA4&uact=5&oq=k%C3%B6rkarlens+trafikskola+%C3%B6ppettider&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjoECAAQRzoHCCMQigUQJzoECCMQJzoFCAAQgAQ6CwguEIAEEMcBEK8BOgYIABAWEB46AggmOgUIIRCgAToECCEQFUoECEEYAFC6AljSGmD6GmgGcAJ4AIABmgGIAYcLkgEEMTMuM5gBAKABAcABAcgBCA&sclient=gws-wiz-serp&dlnr=1&sei=-yGsZJzIGbqQxc8Phs-yuAU#dlnr=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google
                  </a>
                </div>
              </address>
            </div>
            <div className="col-md-4 col-sm-16">
              <h5 className="title mb-3">Adress </h5>
              <address>
                <div className="m-1">Hitta oss på</div>
                <div className="m-1">Sägengatan 31 B</div>
                <div className="m-1">422 58 Hisings Backa</div>
              </address>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p className="follow-text">
                Se eventuella erbjudanden och nyheter på vår Facebook-sida:
                <a
                  href="https://www.facebook.com/profile.php?id=100047322463446"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="facebook-icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
