import React, { useState } from 'react';

function WeatherForm({ getWeather }) {
  const [city, setCity] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getWeather(city);
        setCity('');
      }}
    >
      <input
        type="text"
        id="city"
        placeholder="City..."
        name="city"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Get weather</button>
    </form>
  );
}

export default WeatherForm;
