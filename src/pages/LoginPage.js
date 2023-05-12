import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password});

    if (!error) {
      loginSuccess(data);
      navigate('/');
    }
  }

  return (
    <>
    <header>
      <div className='header-register-page'>
        <p>Hola kembali!</p>
        <p>Selamat datang kembali kamu sangat dirindukan lohh!</p>
      </div>
    </header>
    <main>
      <div className='register-page'>
        <LoginInput login={onLogin} />
        <p className='have-an-account'>Belum punya akun? <Link to='/register'>Daftar dulu</Link></p>
      </div>
    </main>
    </>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
}

export default LoginPage;
