// import './App.css';
// import React, { useState } from 'react';

// import Axios from 'axios';

// const KEY = '735dc8ad78c5b4bf18f04bf4fb1c1';

// function App() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState({});

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   const fetchData = async () => {
//     try {
//       const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
//       setData(response.data);
//     } catch (err) {
//       alert('Please Enter the City Name Correctly');
//     }
//   }
  

//   return (
//     <div className="App">
//    <div className="input-container">
//   <input
//     type="text"
//     className="input"
//     value={city}
//     onChange={(e) => setCity(e.target.value)}
//     placeholder="Enter the City Name"
//   />

//   <button className="button" onClick={fetchData}>Fetch</button>
// </div>

// <div>
//   {data && (
//     <div className="container">
//       <h1 className="city-name">{data.name}, {data.sys.country}</h1>
//       <div className="weather-info">
//         <div className="temp">
//           {Math.round(data.main.temp)}°C
//         </div>
//         <div className="coordinates">
//           <div>Lat - {data.coord.lat}</div>
//           <div>Lon - {data.coord.lon}</div>
//         </div>
//       </div>
//     </div>
//   )}
// </div>


//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React, { useState } from 'react';
// import Axios from 'axios';

// const KEY = 'your_full_api_key_here';  // Ensure this is your complete API key

// function App() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState(null); // Initialize as null to check if data is present

//   const fetchData = async () => {
//     try {
//       const response = await Axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
//       );
//       setData(response.data);
//     } catch (err) {
//       alert('Please Enter the City Name Correctly');
//     }
//   }

//   return (
//     <div className="App">
//       <div className="input-container">
//         <input
//           type="text"
//           className="input"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter the City Name"
//         />
//         <button className="button" onClick={fetchData}>Fetch</button>
//       </div>

//       <div>
//         {data ? (
//           <div className="container">
//             <h1 className="city-name">{data.name}, {data.sys.country}</h1>
//             <div className="weather-info">
//               <div className="temp">
//                 {Math.round(data.main.temp)}°C
//               </div>
//               <div className="coordinates">
//                 <div>Lat - {data.coord.lat}</div>
//                 <div>Lon - {data.coord.lon}</div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>No data available. Please enter a city name and click "Fetch".</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // Use the Open-Meteo API to get the weather data
      const response = await Axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );

      if (response.data.results && response.data.results.length > 0) {
        const location = response.data.results[0];
        const lat = location.latitude;
        const lon = location.longitude;

        const weatherResponse = await Axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        setData({
          name: location.name,
          country: location.country,
          temperature: weatherResponse.data.current_weather.temperature,
          windspeed: weatherResponse.data.current_weather.windspeed,
          weathercode: weatherResponse.data.current_weather.weathercode,
        });
      } else {
        alert('City not found. Please enter a valid city name.');
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      alert('Error fetching weather data. Please try again.');
    }
  }

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter the City Name"
        />
        <button className="button" onClick={fetchData}>Fetch</button>
      </div>

      <div>
        {data && (
          <div className="container">
            <h1 className="city-name">{data.name}, {data.country}</h1>
            <div className="weather-info">
              <div className="temp">
                {data.temperature}°C
              </div>
              <div className="windspeed">
                Windspeed: {data.windspeed} km/h
              </div>
              <div className="weathercode">
                Weather Code: {data.weathercode}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
