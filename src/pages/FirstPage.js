import React from 'react';
import { Link } from 'react-router-dom';

function FirstPage() {
  return (
    <>
      <header>
        <img 
          className='hero-img lazyload' 
          src='./images/skeleton/placeholder.webp' 
          data-src='./images/heros/her-3.webp'
          alt='' />
          <p className='notes-app__title bold'>Catatan Untukmu</p>
      </header>
      <main>
        <div className='first-page'>
          {/* <p className='notes-app__title bold'>Catatan Untukmu</p> */}
          <p>Tuliskan kenangan manis, pahit, indah dan sedihmu tanpa batas. Aku akan selalu ada untuk menemanimu disaat apapun itu.</p>
          <div className='action-button__first-page'>
            <Link className='register' to='/register'>Daftar</Link>
            <Link className='login' to='/login'>Masuk</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default FirstPage;
