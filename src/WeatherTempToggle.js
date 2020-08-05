import React from 'react';

function WeatherTempToggle({ tempType, setTempType }) {
  return (
    <select
      value={tempType}
      onChange={(e) => {
        setTempType(e.target.value);
      }}
    >
      <option value="c">Celsius</option>
      <option value="f">Fahrenheit</option>
    </select>
  );
}

export default WeatherTempToggle;
