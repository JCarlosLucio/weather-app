import React, { useState } from 'react';

function WeatherForm() {
  const [city, setCity] = useState('');
  return (
    <form>
      <select>
        <option>Celsius</option>
        <option>Fahrenheit</option>
      </select>
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
