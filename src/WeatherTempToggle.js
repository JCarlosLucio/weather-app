import React from 'react';

function WeatherTempToggle({ tempType, setTempType }) {
  return (
    <div className="WeatherTempToggle">
      <input
        id="toggle-c"
        className=" WeatherTempToggle-left"
        name="toggle-c"
        type="radio"
      />
      <label htmlFor="toggle-c" className="WeatherTempToggle-btn">
        C
      </label>
      <input
        id="toggle-f"
        className="WeatherTempToggle-right"
        name="toggle-f"
        type="radio"
      />
      <label htmlFor="toggle-f" className="WeatherTempToggle-btn">
        F
      </label>
    </div>
  );
}

export default WeatherTempToggle;
