import { useState } from 'react';
import PropTypes from 'prop-types';
import './WeatherForm.scss';

function WeatherForm({ setCity }) {
  const [inputCity, setInputCity] = useState('');
  return (
    <form
      className="WeatherForm"
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
      <button>sunny?</button>
    </form>
  );
}

WeatherForm.propTypes = {
  setCity: PropTypes.func,
};

export default WeatherForm;
