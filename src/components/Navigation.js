import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { MdOutlineDarkMode, MdTranslate, MdOutlineGTranslate, MdOutlineLogout, MdFavoriteBorder, } from 'react-icons/md';
import { TbHome } from 'react-icons/tb';

function Navigation({ logout, name }) {
  const path = window.location.pathname;
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <div className='note-app__nav'>
      <p className='notes-app__title'>{locale === 'id' ? 'Hey Catatan!!' : 'HeyCa!!'}</p>
      <nav>
        <div className='notes-app__nav-left'>
        {
          path === '/'
          ? <Link className='' to='/archived'><MdFavoriteBorder /></Link>
          : <Link className='' to='/'><TbHome /></Link>
        }
        </div>
        <div className='notes-app__nav-right'>
          <button onClick={toggleLocale}>{locale === 'id' ? <MdTranslate /> : <MdOutlineGTranslate />}</button>
          <button className=''><MdOutlineDarkMode /></button>
          <button onClick={logout}><MdOutlineLogout /></button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
