import React, { useState } from 'react';
import axios from 'axios';

const LocationFinder = () => {
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = async () => {
    if (!location) {
      setError('Please enter a location.');
      return;
    }

    try {
      setError('');
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_API_KEY`
      );
      
      console.log('API response:', response.data); // Log the full response for debugging
      
      const data = response.data;
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setCoords({ lat, lng });
      } else {
        setError('Location not found.');
      }
    } catch (err) {
      console.error('Error details:', err);
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={handleInputChange}
        placeholder="Enter state, district, or city"
      />
      <button onClick={handleSearch}>Get Coordinates</button>
      {coords && (
        <div>
          <p>Latitude: {coords.lat}</p>
          <p>Longitude: {coords.lng}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LocationFinder;
