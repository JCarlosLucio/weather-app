import { useState, useEffect } from 'react';
import { getIconClass, makeDate } from '../Helpers';

function useWeather(data = null) {
  const [weather, setWeather] = useState(data);
  const [temps, setTemps] = useState(data);

  useEffect(
    () => {
      if (data !== null) {
        setWeather({
          city: data.name,
          country: data.sys.country,
          date: makeDate(),
          weather: data.weather[0].main,
          description: data.weather[0].description,
          icon: getIconClass(data.weather[0].icon),
          pressure: data.main.pressure,
          humidity: data.main.humidity,
        });
        setTemps({
          temp: data.main.temp,
          max: data.main['temp_max'],
          min: data.main['temp_min'],
          feelsLike: data.main['feels_like'],
        });
      }
    },
    [data]
  );
  return { weather, temps };
}

export default useWeather;
