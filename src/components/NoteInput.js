import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import { FiCheck } from 'react-icons/fi';

function NoteInput({ addNote }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ 
      title, body
    });
  }

  return (
    <div className='note-input'>
      <p className='note-list_title'>{locale === 'id' ? 'Tambah catatan' : 'Add note'}</p>
      <form onSubmit={onSubmitEventHandler}>
        <input
          className='note-input__title'
          type='text'
          placeholder={locale === 'id' ? 'Judul' : 'Title'}
          required
          value={title}
          onChange={handleTitleChange} />
        <textarea
          className='note-input__body'
          type='text'
          placeholder={locale === 'id' ? 'Catatan' : 'Notes'}
          required
          value={body}
          onChange={handleBodyChange} />
          <ActionButton icon={<FiCheck />} type='submit' />
      </form>
    </div>
  );
}

// class NoteInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: '',
//       body: '',
//       locale: props.locale,
//     }

//     this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
//     this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
//     this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//   }

//   onTitleChangeEventHandler(event) {
//     this.setState(() => {
//       return {
//         title: event.target.value,
//       }
//     })
//   }

//   onBodyChangeEventHandler(event) {
//     this.setState(() => {
//       return {
//         body: event.target.value,
//       }
//     })
//   }

//   onSubmitEventHandler(event) {
//     event.preventDefault();
//     this.props.addNote(this.state);
//   }

//   render() {
//     return (
//       <div className='note-input'>
//         <p className='note-list_title'>{this.state.locale === 'id' ? 'Tambah catatan' : 'Add note'}</p>
//         <form onSubmit={this.onSubmitEventHandler}>
//           <input
//             className='note-input__title'
//             type='text'
//             placeholder={this.state.locale === 'id' ? 'Judul' : 'Title'}
//             required
//             value={this.state.title}
//             onChange={this.onTitleChangeEventHandler} />
//           <textarea
//             className='note-input__body'
//             type='text'
//             placeholder={this.state.locale === 'id' ? 'Catatan' : 'Notes'}
//             required
//             value={this.state.body}
//             onChange={this.onBodyChangeEventHandler} />
//             <ActionButton icon={<FiCheck />} type='submit' />
//         </form>
//       </div>
//     );
//   }
// }

// function NoteInputWrapper({ addNote }) {
//   const { locale } = React.useContext(LocaleContext);

//   return <NoteInput addNote={addNote} locale={locale} />;
// }

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
