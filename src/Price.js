import React, { Component } from "react";

class Price extends Component {
    render() {
    return (
    <div class="table-responsive">
        <h1 className="centerText">Priser</h1><br></br><br></br>

        <h5>Helgkörning kostar 10% extra</h5>
        <h5>Körkarlens trafikskola kan utbilda trafiklärare till buss lastbil och lastbil med släpp</h5>
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
            <td colspan="2">490 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 5 lektioner</th>
            <td colspan="2">2375 kr</td>
            </tr>
            <tr>
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="2">4650 kr</td>
            </tr>
            <tr>
            <th scope="row">Intensivpaket 20 lektioner</th>
            <td>8 950kr</td>
            </tr>
            <tr>
            <th scope="row">Riskettan</th>
            <td>600 kr</td>
            </tr>
            <tr>
            <th scope="row">Risktvåan</th>
            <td>2000 kr</td>
            </tr>
            <tr>
            <th scope="row">B96 Tre lektioner</th>
            <td colspan="2">2900 kr</td>
            </tr>
            <tr>
            <th scope="row">BE Tre lektioner</th>
            <td colspan="2">2900 kr</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Tung lastbil C/C1</h1>
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
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="">8500 kr</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">Intensivpaket 15 lektioner</th>
            <td colspan="">15 000 kr</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Tung lastbil CE</h1>
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
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="">9500 kr</td>
            <td colspan="">✓</td>
            
            </tr>
            <tr>
            <th scope="row">Intensivpaket 15 lektioner</th>
            <td colspan="">16500 kr</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            
            
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Buss D</h1>
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
            <th scope="row">Körpaket 10 lektioner</th>
            <td colspan="">8500 kr</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">Intensivpaket 15 lektioner</th>
            <td colspan="">15 000 kr</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
        </tbody>
        </table>
        <br></br>
        <h1 className="padding-zero">Övrigt</h1>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Lektioner, böcker och teori</th>
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
            <td colspan="2">800 kr</td>
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
        
        <h1 className="padding-zero">Guld, Silver, Brons-paketen</h1>
        <table class="table table-hover">
        <thead>
            <h4>Gäller C,D och CE</h4>
            <tr>
            <th scope="col">Vid uppkörning och funk.</th>
            <th scope="col">Pris</th>
            <th scope="col">Antal lektioner</th>
            <th scope="col">Funk</th>
            <th scope="col">Lån av lastbil</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">BRONS C och D</th>
            <td colspan="">16 000 kr</td>
            <td colspan="">10 st</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">SILVER C och D</th>
            <td colspan="">24 000 kr</td>
            <td colspan="">20 st</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">GULD C och D</th>
            <td colspan="">32 000 kr</td>
            <td colspan="">30 st</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">BRONS CE</th>
            <td colspan="">17 000 kr</td>
            <td colspan="">10 st</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">SILVER CE</th>
            <td colspan="">26 000 kr</td>
            <td colspan="">20 st</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
            <tr>
            <th scope="row">GULD CE</th>
            <td colspan="">35 000 kr</td>
            <td colspan="">30 st</td>
            <td colspan="">✓</td>
            <td colspan="">✓</td>
            </tr>
            
        </tbody>
        </table>
        <br></br>



    </div>

           



        
    );
    }
}

export default Price;