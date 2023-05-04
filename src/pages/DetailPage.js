import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import NoteDetail from '../components/NoteDetail';
import EmptyMessage from '../components/EmptyMessage';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id)
    }
  }

  render() {
    if (this.state.notes === undefined || this.state.notes === null) {
      return <EmptyMessage message='Note is not found!' />;
    }

    return (
      <section>
        <NoteDetail 
          onDelete={this.props.onDelete} 
          onArchive={this.props.onArchive}
          onUnarchive={this.props.onUnarchive}
          {...this.state.notes} />
      </section>
    );
  }
}

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteNoteHandler(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        navigate('/');
        Swal.fire({
          icon: 'success',
          title: 'Your note has been deleted.',
          showConfirmButton: false,
          timer: 1300
        });
      }
    });
  }

  function onArchiveNoteHandler(id) {
    archiveNote(id);
    navigate('/');
  }

  function onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    navigate('/archived');
  }

  return (
    <DetailPage
      id={id}
      onDelete={onDeleteNoteHandler}
      onArchive={onArchiveNoteHandler} 
      onUnarchive={onUnarchiveNoteHandler} />
  );
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default DetailPageWrapper;
