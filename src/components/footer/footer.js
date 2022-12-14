import React, { Component } from "react";
import "./footer.css"

class footer extends Component {
    render() {
    return ( 
        <div>
            <div className="footer bottom">
                
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <h5 class="title mb-3">Adress </h5>
                                
                                <adress>
                                    Hitta oss på
                                    <br></br>
                                        Sägengatan 31
                                    <br></br>
                                        422 58 Hisings Backa
                                </adress>
                                

                            </div>
                            <div class="col-4">
                                <h5 class="title mb-3">Besök oss</h5>
                                <address>
                                Öppettider
                                <br></br>
                                Måndag, fredag 09.00 till 13:00
                                <br></br>
                                Tis-Tors 13.00-17.00 
                                </address>
                            </div>
                            <div class="col-4">
                                <h5 class="title mb-3">Kontakt</h5>
                                <adress>
                                031-52 54 54
                                <br></br>
                                korkarlens.trafikskola@hotmail.com<br></br>
                                <a href="mailto:korkarlens.trafikskola@hotmail.com">Maila oss!</a>
                                
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