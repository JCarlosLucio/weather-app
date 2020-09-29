import React, { useState } from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';
import useWeather from './hooks/useOpenWeatherApi';
import WeatherForm from './WeatherForm';
import WeatherTempToggle from './WeatherTempToggle';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import MadeBy from './MadeBy';
import { convertTemps } from './Helpers';
import './WeatherApp.scss';

function WeatherApp() {
  const [city, setCity] = useLocalStorageState('city', 'london');
  const { weather, temps, isLoading, hasError, errorMessage } = useWeather(
    city
  );
  const [tempType, setTempType] = useState('c');

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
