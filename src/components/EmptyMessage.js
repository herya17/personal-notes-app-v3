import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";

function EmptyMessage({ message }) {
  return (
    <div className='empty-message'>
      <MdOutlineSentimentVeryDissatisfied className='empty-message__icon' />
      <p>{message}</p>
    </div>
  );
}

EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default EmptyMessage;
