import React from 'react';

function WeatherInfo({
  city,
  country,
  weather,
  description,
  pressure,
  humidity,
  temp,
  max,
  min,
  feelsLike,
}) {
  return (
    <div>
      <h1>Weather Info</h1>
      <h3>Weather: {weather}</h3>
      <h3>Description: {description}</h3>
      <h3>Day</h3>
      <h3>
        {city}, {country}
      </h3>
      <h3>Feels Like: {feelsLike} </h3>
      <h3>Temp: {temp} </h3>
      <h3>Max: {max} </h3>
      <h3>Min: {min} </h3>
      <h3>Pressure: {pressure}</h3>
      <h3>Humidity: {humidity}%</h3>
    </div>
  );
}

export default WeatherInfo;
