import './ErrorMessage.scss';

function ErrorMessage({ error }) {
  return (
    <div className="ErrorMessage">
      <i className="fas fa-grin-beam-sweat" alt="error icon" />
      <h3>{error}</h3>
    </div>
  );
}

export default ErrorMessage;
