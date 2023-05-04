import React from 'react';
import PropTypes from 'prop-types';

function EmptyMessage({ message }) {
  return (
    <div className='empty-message'>
      <p>{message}</p>
    </div>
  );
}

EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default EmptyMessage;
