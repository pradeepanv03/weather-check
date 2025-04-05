// // src/Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const MtTravelData = () => {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     try {
//       const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
//         params: {
//           latitude: latitude,
//           longitude: longitude,
//           past_days: 1,
//           hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m'
//         }
//       });
//       setWeatherData(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch weather data');
//       setWeatherData(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <input
//         type="number"
//         placeholder="Latitude"
//         value={latitude}
//         onChange={(e) => setLatitude(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Longitude"
//         value={longitude}
//         onChange={(e) => setLongitude(e.target.value)}
//       />
//       <button onClick={fetchWeatherData}>Get Weather</button>
      
//       {error && <p>{error}</p>}
      
//       {weatherData && (
//         <div>
//           <h2>Weather Data</h2>
//           <p><strong>Temperature:</strong> {weatherData.hourly.temperature_2m[0]}°C</p>
//           <p><strong>Relative Humidity:</strong> {weatherData.hourly.relative_humidity_2m[0]}%</p>
//           <p><strong>Wind Speed:</strong> {weatherData.hourly.wind_speed_10m[0]} km/h</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MtTravelData;



// src/Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const MtTravelData = () => {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     try {
//       const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
//         params: {
//           latitude: latitude,
//           longitude: longitude,
//           past_days: 5,  // Fetch data for the past 5 days
//           hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m'
//         }
//       });
//       setWeatherData(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch weather data');
//       setWeatherData(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <input
//         type="number"
//         placeholder="Latitude"
//         value={latitude}
//         onChange={(e) => setLatitude(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Longitude"
//         value={longitude}
//         onChange={(e) => setLongitude(e.target.value)}
//       />
//       <button onClick={fetchWeatherData}>Get Weather</button>
      
//       {error && <p>{error}</p>}
      
//       {weatherData && (
//         <div>
//           <h2>Weather Data</h2>
//           {/* Displaying data for the past 5 days */}
//           {weatherData.hourly && weatherData.hourly.temperature_2m && weatherData.hourly.temperature_2m.map((temp, index) => (
//             <div key={index}>
//               <h3>Day {index + 1}</h3>
//               <p><strong>Temperature:</strong> {temp}°C</p>
//               <p><strong>Relative Humidity:</strong> {weatherData.hourly.relative_humidity_2m[index]}%</p>
//               <p><strong>Wind Speed:</strong> {weatherData.hourly.wind_speed_10m[index]} km/h</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MtTravelData;





// src/Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const MtTravelData = () => {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     try {
//       const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
//         params: {
//           latitude: latitude,
//           longitude: longitude,
//           past_days: 5,  // Fetch data for the past 5 days
//           hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m'
//         }
//       });
//       setWeatherData(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch weather data');
//       setWeatherData(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <input
//         type="number"
//         placeholder="Latitude"
//         value={latitude}
//         onChange={(e) => setLatitude(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Longitude"
//         value={longitude}
//         onChange={(e) => setLongitude(e.target.value)}
//       />
//       <button onClick={fetchWeatherData}>Get Weather</button>
      
//       {error && <p>{error}</p>}
      
//       {weatherData && weatherData.hourly && weatherData.hourly.temperature_2m && (
//         <table>
//           <thead>
//             <tr>
//               <th>Day</th>
//               <th>Temperature (°C)</th>
//               <th>Relative Humidity (%)</th>
//               <th>Wind Speed (km/h)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {weatherData.hourly.temperature_2m.map((temp, index) => (
//               <tr key={index}>
//                 <td>Day {index + 1}</td>
//                 <td>{temp}°C</td>
//                 <td>{weatherData.hourly.relative_humidity_2m[index]}%</td>
//                 <td>{weatherData.hourly.wind_speed_10m[index]} km/h</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MtTravelData;



// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const MtTravelData = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: latitude,
          longitude: longitude,
          past_days: 5,  // Fetch data for the past 5 days
          hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m',
          daily: 'temperature_2m_max,temperature_2m_min,relative_humidity_2m_max,relative_humidity_2m_min,wind_speed_10m_max'
        }
      });
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data');
      setWeatherData(null);
    }
  };

  // Function to get weekday name from a date string
  const getWeekdayName = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
      
      {error && <p>{error}</p>}
      
      {weatherData && weatherData.daily && (
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Temperature Max (°C)</th>
              <th>Temperature Min (°C)</th>
              <th>Relative Humidity Max (%)</th>
              <th>Relative Humidity Min (%)</th>
              <th>Wind Speed Max (km/h)</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.daily.time.map((date, index) => (
              <tr key={index}>
                <td>{getWeekdayName(date)}</td>
                <td>{weatherData.daily.temperature_2m_max[index]}°C</td>
                <td>{weatherData.daily.temperature_2m_min[index]}°C</td>
                <td>{weatherData.daily.relative_humidity_2m_max[index]}%</td>
                <td>{weatherData.daily.relative_humidity_2m_min[index]}%</td>
                <td>{weatherData.daily.wind_speed_10m_max[index]} km/h</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MtTravelData;
