import React, { Component } from "react";
import "./footer.css"

class footer extends Component {
    render() {
    return ( 
        <div>
            <div className="footer bottom">
                
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <h5 class="title mb-3">Kontakt</h5>
                                <adress>
                                Tlf 0700 90 72 10
                                <br></br>
                                
                                <a href="mailto:korkarlens.trafikskola@hotmail.com">korkarlens.trafikskola@hotmail.com</a><br></br>
                                
                                </adress>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <h5 class="title mb-3">Öppettider</h5>
                                <address>
                                Måndag 09.00 - 15.00, Tisdag 13.00 - 17.00 
                                <br></br>
                                Onsdag 09.00 - 17:00, Tors 13.00 - 17.00
                                <br></br>
                                Fredag 09.00 - 13:00
                                </address>
                            </div>
                            <div class="col-md-4 col-sm-16">
                                <h5 class="title mb-3">Adress </h5>
                                
                                <adress>
                                    Hitta oss på
                                    <br></br>
                                        Sägengatan 31 B
                                    <br></br>
                                        422 58 Hisings Backa
                                </adress>
                                

                            </div>
                            
                        </div>
                    </div>
                    
            </div>
        



        </div>
        );
    }
}
export default footer;