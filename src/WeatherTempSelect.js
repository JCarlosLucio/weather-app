import React from 'react';

function WeatherTempSelect({ tempType, setTempType }) {
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

export default WeatherTempSelect;
