import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyMessage from '../components/EmptyMessage';
import ActionButton from '../components/ActionButton';
import { getActiveNotes } from '../utils/local-data';
import { Link, useSearchParams } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword: keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => (
      note.title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase())
    ));

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <p className='note-list_title'>Note active</p>
        {
          notes.length > 0
          ? <NoteList notes={notes} />
          : <EmptyMessage message="Empty active note, could not find" />
        }
        <Link to='/add'>
          <ActionButton icon={<MdAdd />} />
        </Link>
      </section>
    );
  }
}

function HomePageWrapper() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;
