import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/showFormattedDate';
import ActionButton from '../components/ActionButton';
import { MdDeleteOutline, MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className='note-detail'>
      <p className='note-detail__title'>{title}</p>
      <p className='note-detail__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-detail__body'>{body}</p>
      <ActionButton icon={<MdDeleteOutline />} id={id} type='delete' onDelete={onDelete} />
      {
        archived
          ? <ActionButton icon={<MdOutlineUnarchive />} id={id} type='unarchive' onUnarchive={onUnarchive} />
          : <ActionButton icon={<MdOutlineArchive />} id={id} type='archive' onArchive={onArchive} />
      }
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default NoteDetail;
