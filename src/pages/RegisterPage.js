import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import Swal from 'sweetalert2';

function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    
    if (!error) {
      navigate('/login');
    }
  }

  return (
    <>
    <header>
      <div className='header-register-page'>
        <p>Hola Selamat Datang!</p>
        <p>Ayo daftarin dirimu dulu yah bila kamu belum terdaftar!</p>
        {/* <p>Daftarin dirimu dulu yah, jangan lupa isinya make hati dan cinta yang tulus!</p> */}
      </div>
    </header>
    <main>
      <div className='register-page'>
        <RegisterInput register={onRegisterHandler} />
        <p className='have-an-account'>Kamu punya akun? <Link to='/login'>Masuk aja</Link></p>
      </div>
    </main>
    </>
  );
}

export default RegisterPage;
