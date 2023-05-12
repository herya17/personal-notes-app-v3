import React from 'react';
import EmptyMessage from '../components/EmptyMessage';
import LocaleContext from '../contexts/LocaleContext';

function NoPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className='no-page'>
      <EmptyMessage message={locale === 'id' ? 'Halaman tidak dikenal' : 'Unknown page'} isNoPage={true} />
    </div>
  );
}

export default NoPage;
