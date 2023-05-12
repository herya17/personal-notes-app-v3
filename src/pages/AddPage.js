import React from 'react';
import NoteInput from '../components/NoteInput';
// import ActionButton from '../components/ActionButton';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
