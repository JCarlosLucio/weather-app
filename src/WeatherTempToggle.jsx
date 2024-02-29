import './WeatherTempToggle.scss';

function WeatherTempToggle({ tempType, setTempType }) {
  return (
    <div className="WeatherTempToggle">
      <input
        id="toggle-c"
        className=" WeatherTempToggle-left"
        name="toggle"
        type="radio"
        defaultChecked={tempType === 'c'}
        value="c"
        onChange={(e) => {
          setTempType(e.target.value);
        }}
      />
      <label htmlFor="toggle-c" className="WeatherTempToggle-btn">
        C
      </label>
      <input
        id="toggle-f"
        className="WeatherTempToggle-right"
        name="toggle"
        type="radio"
        defaultChecked={tempType === 'f'}
        value="f"
        onChange={(e) => {
          setTempType(e.target.value);
        }}
      />
      <label htmlFor="toggle-f" className="WeatherTempToggle-btn">
        F
      </label>
    </div>
  );
}

export default WeatherTempToggle;
