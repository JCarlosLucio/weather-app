import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const API_KEY = process.env.REACT_APP_API_KEY;

function WeatherApp() {
  // make state for weather response
  const [weather, setWeather] = useState(null);
  const [temps, setTemps] = useState(null);
  const [tempType, setTempType] = useState('c');

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
      setTemps({
        temp: weatherData.main.temp,
        max: weatherData.main['temp_max'],
        min: weatherData.main['temp_min'],
        feelsLike: weatherData.main['feels_like'],
      });
    } catch (e) {
      console.error(e);
    }
  };
  const toFahrenheit = (K) => {
    return Math.round((K - 273.15) * (9 / 5) + 32);
  };

  const toCelsius = (K) => {
    return Math.round(K - 273.15);
  };

  const transformTemps = (obj, type) => {
    const newTemps = {};
    for (const key in obj) {
      if (type === 'c') {
        newTemps[key] = toCelsius(obj[key]);
      } else {
        newTemps[key] = toFahrenheit(obj[key]);
      }
    }
    return newTemps;
  };

  return (
    <div>
      <h1>WEATHER APP</h1>
      <WeatherForm getWeather={getWeather} />

      <WeatherInfo {...weather} {...temps} />
    </div>
  );
}

export default WeatherApp;
