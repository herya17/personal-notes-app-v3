import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivedPage from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import FirstPage from './pages/FirstPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NoPage from './pages/NoPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import LocaleContext from './contexts/LocaleContext';
import Swal from 'sweetalert2';

function App() {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(() => {
    return localStorage.getItem('locale') || 'id';
  });

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    getData();

  }, []);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  }

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    }
  }, [locale]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  const onLogout = () => {
    Swal.fire({
      title: 'Kamu kenapa? Yakin ingin pergi?',
      text: "Aku gak mau kamu pergi, aku ingin bersama kamu terus!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#28a745',
      confirmButtonText: 'Tetap pergi',
      cancelButtonText: 'Tetap bersama',
    }).then((result) => {
      if (result.isConfirmed) {
        setAuthedUser(null);
        putAccessToken('');
        navigate('/');
        Swal.fire({
          icon: 'success',
          title: 'HeyCa!! Selalu MenantiMu!',
          text: "Aku akan selalu ada untukmu dan selalu merindukanmu!",
          showConfirmButton: true,
        });
      }
    });
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </LocaleContext.Provider>
    );
  }

  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <header>
          <Navigation logout={onLogout} name={authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<AddPage />} />
            <Route path='/archived' element={<ArchivedPage />} />
            <Route path='/notes/:id' element={<DetailPage />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
