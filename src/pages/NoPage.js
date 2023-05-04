import React from 'react';
import EmptyMessage from '../components/EmptyMessage';

function NoPage() {
  return (
    <div className='no-page'>
      <p>404</p>
      <EmptyMessage message='Unknown page' />
    </div>
  );
}

export default NoPage;
