import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyMessage from '../components/EmptyMessage';
import ActionButton from '../components/ActionButton';
import { getArchivedNotes } from '../utils/network-data';
import { MdAdd } from 'react-icons/md';
import { Link, useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function ArchivedPage() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }

    getData();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });    
  }

  const filteredNotes = notes.filter((note) => (
    note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  ));

  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        {
          filteredNotes.length > 0
            ? <NoteList notes={filteredNotes} />
            : <EmptyMessage 
                message={locale === 'id' 
                  ? 'Catatan favorit kosong, tidak dapat ditemukan!' 
                  : 'Empty favorite note, could not be found!'} />
        }
        <Link to='/add'>
          <ActionButton icon={<MdAdd />} />
        </Link>
    </section>
  );
}

export default ArchivedPage;
