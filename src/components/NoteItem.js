import React from 'react';
import { showFormattedDate } from '../utils/showFormattedDate';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NoteItem({ id, title, createdAt, body }) {
  let description = body;
  if (description.length > 80) {
    description = body.substring(0, 80) + '...';
  }

  return (
    <div className='note-item'>
      <Link className='note-item__title' to={`/notes/${id}`}>{title}</Link>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{description}</p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteItem;
