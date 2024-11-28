// src/App.jsx

import WeatherSearch from './components/WeatherSearch';
import * as weatherService from './services/weatherService';
import WeatherDetails from './components/WeatherDetails';
import { useState, useEffect } from 'react';

const App = () => {
  const [weather, setWeather] = useState({});

const fetchData = async (city) => {
  const data = await weatherService.show(city);
  const newWeatherState = {
    location: data.location.name,
    temperature: data.current.temp_f,
    condition: data.current.condition.text,
  };
  setWeather(newWeatherState);

};

useEffect(() => {
  const fetchDefaultData = async () => {
    const data = await weatherService.show('New York');
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  fetchDefaultData();

}, []); 

console.log('State:', weather);


  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;


//03f2d36209d94c9c855192601242811