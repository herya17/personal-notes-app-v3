import React from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled, MdOutlineArchive, MdOutlineDarkMode, MdTranslate, MdOutlineLogout } from "react-icons/md";

function Navigation() {
  return (
    <>
    <Link className='notes-app__title' to='/'>My Notes</Link>
    <nav>
      <div className='notes-app__nav-left'>
        <Link className='' to='/archived'><MdOutlineArchive /></Link>
      </div>
      <div className='notes-app__nav-right'>
        <Link className='' to='/'><MdOutlineDarkMode /></Link>
        <Link className='' to='/'><MdTranslate /></Link>
        <Link className='' to='/archived'><MdOutlineLogout /></Link>
      </div>
    </nav>
    </>
  );
}

export default Navigation;
