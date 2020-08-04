import React, { useState } from 'react';
import './WeatherForm.scss';

function WeatherForm({ setCity }) {
  const [inputCity, setInputCity] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCity(inputCity);
        setInputCity('');
      }}
    >
      <input
        type="text"
        id="city"
        placeholder="City..."
        name="city"
        required
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button>Get weather</button>
    </form>
  );
}

export default WeatherForm;
