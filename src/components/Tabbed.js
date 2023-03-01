import React, { useState } from 'react';
import VehicleCar from "./images/vehicles/B.png"
import VehicleCarTrailer from "./images/vehicles/BE.png"
import VehicleTruck from "./images/vehicles/C.png"
import VehicleBuss from "./images/vehicles/D.png"
import VehicleTruckCE from "./images/vehicles/CE.png"
import "../home.css"



function DrivingLicenses() {
  const [activeTab, setActiveTab] = useState('class-a');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div>
      <ul className="tabs">
        <li className={activeTab === 'class-a' ? 'active' : ''} onClick={() => handleTabClick('class-a')}><img src={VehicleCar}/></li>
        <li className={activeTab === 'class-b' ? 'active' : ''} onClick={() => handleTabClick('class-b')}><img src={VehicleCarTrailer}/></li>
        <li className={activeTab === 'class-c' ? 'active' : ''} onClick={() => handleTabClick('class-c')}><img src={VehicleTruck}/></li>
        <li className={activeTab === 'class-e' ? 'active' : ''} onClick={() => handleTabClick('class-e')}><img src={VehicleTruckCE}/></li>
        <li className={activeTab === 'class-d' ? 'active' : ''} onClick={() => handleTabClick('class-d')}><img src={VehicleBuss}/></li>
        
      </ul>
      {activeTab === 'class-a' && (
        <div className='max-w'>
          <h3>Personbil B</h3>
          <p>Med körkortsbehörigheten B får du bland annat köra personbilar och lätta lastbilar med en totalvikt på högst 3 500 kg.</p>
          <p>Släpets totalvikt inte är mer än 750 kg.</p>
        </div>
      )}
      {activeTab === 'class-b' && (
        <div className='max-w'>
          <h3>Personbil BE</h3>
          <p>Med behörigheten BE får du köra personbilar eller lätta lastbilar med en totalvikt på högst 3 500 kg och en eller flera släp kopplade till bilen. Släpets eller släpens sammanlagda totalvikt får dock inte vara över 3 500 kg.</p>
        </div>
      )}
      {activeTab === 'class-c' && (
        <div className='max-w'>
          <h3>Lastbil C/C1</h3>
          <h4>C</h4>
          <p>Körkortsbehörigheten C ger rätt att köra lastbilar utan övre viktbegränsning. Du får också köra personbilar med en totalvikt över 3500 kg utan övre viktbegränsning. Du får koppla till en lätt släpvagn med totalvikt på högst 750 kg.</p>
          <h4>C1</h4>
          <p>Körkortsbehörigheten C1 ger rätt att köra lastbilar med en totalvikt på högst 7500 kg. Med ett C1-körkort får du också köra personbilar med en totalvikt över 3500 kg men inte över 7500 kg.</p>
        </div>
      )}
      {activeTab === 'class-d' && (
        <div className='max-w'>
          <h3>Buss D</h3>
          <p>Körkortsbehörigheten D ger rätt att köra bussar oavsett antal sittplatser eller längd. Du får också dra en lätt släpvagn med totalvikt på högst 750 kg</p>
        </div>
      )}
      {activeTab === 'class-e' && (
        <div className='max-w'>
          <h3>Lastbil CE</h3>
          <p>Med ett körkort med behörigheten CE får du köra lastbilar och personbilar utan viktgräns. Du får också koppla till en eller flera släpvagnar utan viktgräns. För att få ett CE-körkort krävs det att: Du har ett svenskt körkort med C-behörighet.</p>
        </div>
      )}
    </div>
  );
}

export default DrivingLicenses;