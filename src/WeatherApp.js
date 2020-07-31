import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const API_KEY = process.env.REACT_APP_API_KEY;

function WeatherApp() {
  // make state for weather response
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const weatherData = await res.json();
      console.log(weatherData);
      setWeather({
        city: weatherData.name,
        country: weatherData.sys.country,
        weather: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>WEATHER APP</h1>
      <WeatherForm getWeather={getWeather} />
      <WeatherInfo {...weather} />
    </div>
  );
}

export default WeatherApp;
