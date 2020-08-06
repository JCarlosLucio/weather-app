import React from 'react';
import './WeatherInfo.scss';

function WeatherInfo({
  city,
  country,
  date,
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
    <div className="WeatherInfo">
      <section className="WeatherInfo-global">
        <div>
          <h1>
            {city}, {country}
          </h1>
          <h6>{date}</h6>
        </div>
      </section>
      <section className="WeatherInfo-weather">
        <div>
          <h2>{weather}</h2>
          <h1>🌦</h1>
          <h6>{description}</h6>
        </div>
        <div>
          <h1> {temp}°</h1>
          <h6>Feels Like: {feelsLike}° </h6>
          <h5>
            {min}° / {max}°
          </h5>
        </div>
      </section>
      <section className="WeatherInfo-details">
        <div>
          <h6>
            <i className="fas fa-tachometer-alt" alt-label="pressure" />{' '}
            {pressure} hPa
          </h6>
          <h6>
            <i className="fas fa-tint" alt-label="humidity" /> {humidity}%
          </h6>
        </div>
      </section>
    </div>
  );
}

export default WeatherInfo;
