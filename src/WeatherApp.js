import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

function WeatherApp() {
  return (
    <div>
      <h1>WEATHER APP</h1>
      <WeatherForm />
      <WeatherInfo />
    </div>
  );
}

export default WeatherApp;
