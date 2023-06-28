import React, { Component } from "react";

class Price extends Component {
    render() {
    return (
    <div class="table-responsive">
        <div class="row">
        <h1 class="card-title text-center">Priser</h1>
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    
                    <h3 class="card-subtitle text-center">Information och regler</h3>
                    <hr></hr>
                    <h5 class="card-text text-center">Helgkörning kostar 15% extra per lektion och gäller B, B96, BE, C, C1, D, CE</h5>
                    <h5 class="card-text text-center">Körkarlens trafikskola kan utbilda trafiklärare till buss, lastbil och lastbil med släp.</h5>
                    <h5 class="card-text text-center">Köpta lektioner måste utnyttjas inom 6 månader</h5>
                </div>
                </div>
            </div>
        </div>

        <br></br>
        <h1 className="padding-zero">Personbil B</h1>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner och körpaket</th>
            <th scope="col">Pris</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">40 minuter körlektion</th>
            <td colspan="2">590 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 5 lektioner</th>
            <td colspan="2">2925 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="2">5850 kr</td>
            </tr>
            <tr>
            <th scope="row">Intensivpaket 20 lektioner</th>
            <td>11 400 kr</td>
            </tr>
            <tr>
            <th scope="row">Riskettan</th>
            <td>600 kr</td>
            </tr>
            <tr>
            <th scope="row">Risktvåan</th>
            <td>2000 kr</td>
            </tr>
            
        </tbody>
        </table>

        <h3 className="padding-zero">Personbil B släp</h3>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner och körpaket</th>
            <th scope="col">Pris</th>
            <th scope="col">Lån av bil och släp</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">B96 Tre lektioner</th>
            <td colspan="">4000 kr</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">BE Tre lektioner</th>
            <td colspan="">4000 kr</td>
            <td className="green" colspan="">✓</td>
            </tr>
        </tbody>
        </table>
        
        <br></br>
        <h1 className="padding-zero">Tung lastbil C/C1</h1>

        
        
        <h5>Endast dubbla lektioner kan bokas för C/C1.</h5>
        <br></br>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner och körpaket</th>
            <th scope="col">Pris</th>
            <th scope="col">Böcker</th>
            <th scope="col">Online test</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">40 minuter körlektion</th>
            <td colspan="2">880 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 5 lektioner</th>
            <td>4300 kr</td>
            </tr>
            <tr>
            <th scope="row">Undervisning funk 10 lektioner</th>
            <td colspan="">7000 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="">8500 kr</td>
            
            </tr>
            <tr>
            <th scope="row">Intensivpaket 15 lektioner</th>
            <td colspan="">15 000 kr</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Tung lastbil CE</h1>
        <h5>Endast trippla lektioner kan bokas för CE.</h5>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner och körpaket</th>
            <th scope="col">Pris</th>
            <th scope="col">Böcker</th>
            <th scope="col">Online test</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">40 minuter körlektion</th>
            <td colspan="2">980 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 5 lektioner</th>
            <td>4800 kr</td>
            </tr>
            <tr>
            <th scope="row">Undervisning funk 10 lektioner</th>
            <td colspan="">7000 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="">9500 kr</td>
            
            
            </tr>
            <tr>
            <th scope="row">Intensivpaket 15 lektioner</th>
            <td colspan="">16500 kr</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            
            
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Buss D</h1>
        <h5>Endast dubbla lektioner kan bokas för D.</h5>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner och körpaket</th>
            <th scope="col">Pris</th>
            <th scope="col">Böcker</th>
            <th scope="col">Online test</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">40 minuter körlektion</th>
            <td colspan="2">880 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 5 lektioner</th>
            <td colSpan="2">4300 kr</td>
            </tr>
            <tr>
            <th scope="row">Undervisning funk 10 lektioner</th>
            <td colspan="">7000 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="">8500 kr</td>
            
            </tr>
            <tr>
            <th scope="row">Intensivpaket 15 lektioner</th>
            <td colspan="">15 000 kr</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h4 className="padding-zero">Yrkeskompetensbevis</h4>
        
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Timmar</th>
            <th scope="col">Pris</th>
            <th scope="col">Buss</th>
            <th scope="col">Lastbil</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">140 timmar</th>
            <td colspan="">35 000 kr</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">280 timmar</th>
            <td colSpan="">60 000 kr</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">Fortbildning 35 timmar</th>
            <td colspan="">12 000 kr</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            
            </tr>
            <tr>
            <th scope="row">Komplettering 35 h</th>
            <td colspan="2">12 000 kr</td>
            <td className="green" colspan="">✓</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Övrigt</h1>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner och teori</th>
            <th scope="col">Pris</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Teori hemifrån(obeg)</th>
            <td colspan="2">600 kr</td>
            </tr>
            <tr>
            <th scope="row">Teoriprov</th>
            <td colSpan="2">325 kr</td>
            </tr>
            <tr>
            <th scope="row">Körprov</th>
            <td colspan="2">800 kr</td>
            </tr>
            <tr>
            <th scope="row">Handledarkurs</th>
            <td colspan="2">250 kr</td>
            </tr>
        </tbody>
        </table>
        
        <br></br>
        <h1 className="padding-zero">Böcker</h1>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Rekomenderade böcker</th>
            <th scope="col">Pris</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Köra lastbil</th>
            <td colspan="2">700 kr</td>
            </tr>
            <tr>
            <th scope="row">Köra buss</th>
            <td colSpan="2">700 kr</td>
            </tr>
            <tr>
            <th scope="row">Trafikens grunder</th>
            <td colspan="2">700 kr</td>
            </tr>
            <tr>
            <th scope="row">Yrkesförarkompetens</th>
            <td colspan="2">700 kr</td>
            </tr>
            <tr>
            <th scope="row">Last säkerhetsboken (TYA)</th>
            <td colspan="2">100 kr</td>
            </tr>
            <tr>
            <th scope="row">Onlinetest</th>
            <td colspan="2">700 kr</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Lån av fordon</h1>
        <table class="table table-hover">
        <thead>
            <h4>För skolans elever</h4>
            <tr>
            <th scope="col">Vid uppkörning och funk.</th>
            <th scope="col">Pris</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Personbil B</th>
            <td colspan="2">1200 kr</td>
            </tr>
            <tr>
            <th scope="row">BE/B96</th>
            <td colspan="2">1500 kr</td>
            </tr>
            <tr>
            <th scope="row">Tung lastbil C uppkörning</th>
            <td colspan="2">3000 kr</td>
            </tr>
            <tr>
            <th scope="row">Tung lastbil C funk</th>
            <td colspan="2">2000 kr</td>
            </tr>
            <tr>
            <th scope="row">Tung lastbil CE uppkörning</th>
            <td colspan="2">3500 kr</td>
            </tr>
            <tr>
            <th scope="row">Tung lastbil CE funk</th>
            <td colspan="2">2500 kr</td>
            </tr>
            <tr>
            <th scope="row">Buss D uppkörning</th>
            <td colspan="2">3000 kr</td>
            </tr>
            <tr>
            <th scope="row">Buss D funk</th>
            <td colspan="2">2000 kr</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        
        
        <h1 className="padding-zero">
        <span class="gold">Guld,</span>
        <span class="silver">Silver,</span>
        <span class="bronze">Brons-paketen</span>
        </h1>
        <table class="table table-hover">
        <thead>
            <h4>Gäller C,D och CE</h4>
            <tr>
            <th scope="col">Paket.</th>
            <th scope="col">Pris</th>
            <th scope="col">Antal lektioner</th>
            <th scope="col">Funk</th>
            <th scope="col">Lån av lastbil</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th className="bronze" scope="row">BRONS C och D</th>
            <td colspan="">16 000 kr</td>
            <td colspan="">10 st</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th className="silver" scope="row">SILVER C och D</th>
            <td colspan="">24 000 kr</td>
            <td colspan="">20 st</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th className="gold" scope="row">GULD C och D</th>
            <td colspan="">32 000 kr</td>
            <td colspan="">30 st</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th className="bronze" scope="row">BRONS CE</th>
            <td colspan="">17 000 kr</td>
            <td colspan="">10 st</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th className="silver" scope="row">SILVER CE</th>
            <td colspan="">26 000 kr</td>
            <td colspan="">20 st</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            <tr>
            <th className="gold" scope="row">GULD CE</th>
            <td colspan="">35 000 kr</td>
            <td colspan="">30 st</td>
            <td className="green" colspan="">✓</td>
            <td className="green" colspan="">✓</td>
            </tr>
            
        </tbody>
        </table>
        <br></br>



    </div>

           



        
    );
    }
}

export default Price;