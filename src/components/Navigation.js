import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArchive } from "react-icons/md";

function Navigation() {
  return (
    <nav>
      <Link className='notes-app__title' to='/'>Notes App</Link>
      <Link className='notes-app__archive' to='/archived'><MdOutlineArchive /></Link>
    </nav>
  );
}

export default Navigation;
