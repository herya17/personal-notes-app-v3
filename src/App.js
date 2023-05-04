import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivedPageWrapper from './pages/ArchivedPage';
import DetailPageWrapper from './pages/DetailPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
    <header>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<HomePageWrapper />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/archived' element={<ArchivedPageWrapper />} />
        <Route path='/notes/:id' element={<DetailPageWrapper />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
