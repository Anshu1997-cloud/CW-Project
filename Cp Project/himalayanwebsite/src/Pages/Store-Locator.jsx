import React, {useState} from "react";
import "../Style/MapComponent.css";


 export function StoreLocator(){
    const [zipCode, setZipCode] = useState('');
  const [mapURL, setMapURL] = useState('');


  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

    
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make API call to OpenWeatherMap to get coordinates based on ZIP code
      const apiKey = '8e40e7bfc0ab1c71795f9cec4c91358b';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data)

      // Extract coordinates from the API response (assuming data.coord contains lat and lon)
      const { lat, lon } = data.coord;

      // Generate the map URL using latitude and longitude
      const mapUrl = `https://www.openstreetmap.org/#map=13/${lat}/${lon}`;
      setMapURL(mapUrl);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="map-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={handleInputChange}
        />
        <button type="submit">Show Location</button>
      </form>
      {mapURL && (
        <iframe
          title="Location Map"
          width="600"
          height="450"
          frameBorder="0"
          src={mapURL}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};