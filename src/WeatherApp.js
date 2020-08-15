import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import useWeather from './hooks/useWeather';
import WeatherForm from './WeatherForm';
import WeatherTempToggle from './WeatherTempToggle';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import MadeBy from './MadeBy';
import { convertTemps } from './Helpers';
import './WeatherApp.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

function WeatherApp() {
  const [city, setCity] = useState('london');
  const [tempType, setTempType] = useState('c');

  const url =
    city &&
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const { data, isLoading, hasError, errorMessage } = useFetch(url);
  const { weather, temps } = useWeather(data);

  return (
    <div className="WeatherApp">
      <div className="WeatherApp-header">
        <div className="WeatherApp-header-content">
          <MadeBy link="https://github.com/JCarlosLucio/weather-app" />
          <h1>WEATHER APP</h1>
          <WeatherForm setCity={setCity} />
          <WeatherTempToggle tempType={tempType} setTempType={setTempType} />
        </div>
      </div>
      {isLoading ? hasError ? (
        <ErrorMessage error={errorMessage} />
      ) : (
        <Loading />
      ) : (
        <WeatherInfo {...weather} {...convertTemps(temps, tempType)} />
      )}
    </div>
  );
}

export default WeatherApp;
