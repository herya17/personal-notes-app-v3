import React from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled, MdOutlineArchive, MdOutlineDarkMode, MdTranslate, MdOutlineLogout } from "react-icons/md";

function Navigation() {
  return (
    <>
    <Link className='notes-app__title' to='/'>Catatan Untukmu</Link>
    <nav>
      <div className='notes-app__nav-left'>
        <Link className='' to='/archived'><MdOutlineArchive /></Link>
      </div>
      <div className='notes-app__nav-right'>
        <button className=''><MdOutlineDarkMode /></button>
        <button className=''><MdTranslate /></button>
        <button className=''><MdOutlineLogout /></button>
      </div>
    </nav>
    </>
  );
}

export default Navigation;
