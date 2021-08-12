import React, { useState }from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () =>{

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  }
  const headerImage = {
    src: "weather.png",
    alt: "Logo Cloud",
    width: "100px"
  }

  return(
    <div className= 'main-container'>
      <div className= 'heading-container'>
        <h1 className= 'main-heading'>Let's get today's weather</h1>
        <img className= 'header-image' src= {headerImage.src} alt={headerImage.alt} width= {headerImage.width} />
      </div>

      <input 
       type= 'text'
       className= 'search'
       placeholder= 'Enter city for weather...' 
       value= {query}
       onChange= {(e) => setQuery(e.target.value)}
       onKeyPress= {search}
       />
       {weather.main && (
         <div className= 'city'>
            <h2 className= 'city-name'>
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
            </h2>
            <div className= 'city-temp'>
              {Math.round(weather.main.temp)}
              <sup>&deg;</sup>
            </div>
            <div className= 'info'>
              <img className= 'city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
              <p>{weather.weather[0].description}</p>
            </div>
         </div>
       )}
    </div>
  );
}

export default App;