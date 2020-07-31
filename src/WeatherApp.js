import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const API_KEY = process.env.REACT_APP_API_KEY;

function WeatherApp() {
  const getWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const weatherData = await res.json();
      console.log(weatherData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>WEATHER APP</h1>
      <WeatherForm getWeather={getWeather} />
      <WeatherInfo />
    </div>
  );
}

export default WeatherApp;
