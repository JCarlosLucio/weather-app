import PropTypes from 'prop-types';
import './ErrorMessage.scss';

function ErrorMessage({ error }) {
  return (
    <div className="ErrorMessage">
      <i className="fas fa-grin-beam-sweat" alt="error icon" />
      <h3>{error}</h3>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
