import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import { FiCheck } from 'react-icons/fi';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className='note-input'>
        <p className='note-list_title'>Add note</p>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className='note-input__title'
            type='text'
            placeholder='Title'
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler} />
          <textarea
            className='note-input__body'
            type='text'
            placeholder='Notes'
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler} />
            <ActionButton icon={<FiCheck />} type='submit' />
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
