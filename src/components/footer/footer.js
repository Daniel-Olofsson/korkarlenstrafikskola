import React, { Component } from "react";
import "./footer.css"

class footer extends Component {
    render() {
    return ( 
        <div>
            <div className="footer">
                
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <h5 class="title mb-3">Adress </h5>
                                
                                <adress>
                                        Sägengatan 31
                                    <br></br>
                                        422 58 Hisings Backa
                                </adress>
                                

                            </div>
                            <div class="col-4">
                                <h5 class="title mb-3">Besök oss</h5>
                                

                            </div>
                            <div class="col-4">
                                <h5 class="title mb-3">Kontakt</h5>
                                

                            </div>
                            
                        </div>
                    </div>
            </div>
        



        </div>
        );
    }
}
export default footer;