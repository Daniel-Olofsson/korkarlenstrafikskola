import React, { useState } from 'react';

function DrivingLicenses() {
  const [activeTab, setActiveTab] = useState('class-a');

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div>
      <ul className="tabs">
        <li className={activeTab === 'class-a' ? 'active' : ''} onClick={() => handleTabClick('class-a')}>Personbil B</li>
        <li className={activeTab === 'class-b' ? 'active' : ''} onClick={() => handleTabClick('class-b')}>Personbil BE</li>
        <li className={activeTab === 'class-c' ? 'active' : ''} onClick={() => handleTabClick('class-c')}>Lastbil C/C1</li>
      </ul>
      {activeTab === 'class-a' && (
        <div>
          <h3>Personbil B</h3>
          <p>A Class A license allows you to operate any vehicle or combination of vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 pounds or more,</p>
          <p>provided the Gross Vehicle Weight Rating (GVWR) of the vehicle being towed is more than 10,000 pounds.</p>
        </div>
      )}
      {activeTab === 'class-b' && (
        <div>
          <h3>Personbil BE</h3>
          <p>A Class B license allows you to operate any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.</p>
        </div>
      )}
      {activeTab === 'class-c' && (
        <div>
          <h3>Lastbil C/C1</h3>
          <p>A Class C license allows you to operate any single vehicle, or combination of vehicles, that is not a Class A or Class B vehicle, but that either is designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.</p>
        </div>
      )}
    </div>
  );
}

export default DrivingLicenses;