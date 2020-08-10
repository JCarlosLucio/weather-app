import React from 'react';

function ErrorMessage({ error }) {
  return (
    <div>
      <i className="fas fa-grin-beam-sweat" alt-label="error icon" />
      <h3>{error}</h3>
    </div>
  );
}

export default ErrorMessage;
