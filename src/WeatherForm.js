import React from 'react';

function WeatherForm() {
  return (
    <form>
      <select>
        <option>Celsius</option>
        <option>Fahrenheit</option>
      </select>
      <input placeholder="City..." />
      <button>Get weather</button>
    </form>
  );
}

export default WeatherForm;
