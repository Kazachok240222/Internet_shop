import React, { useState } from 'react';
import ico1 from '../Img/default_ava.svg';
import ico2 from '../Img/korsina.svg';
import ico3 from '../Img/like.svg';
import ico4 from '../Img/eye.svg';
import './Okno.css';

import Vhod from './Vhod';
import Account from './Account';

const Okno = () => {
  const [opened, setOpened] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const checkAuthentication = () => {

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername === 'user' && storedPassword === 'password') {
      setIsLogged(true);
    }
  };

  const handleLogin = () => {
    setOpened(true);
    checkAuthentication();
  };

  return (
    <div className='Okno'>
      {!isLogged ? (
        <div className='content'>
          <div className='avatar'>
            <img className='avatar' src={ico1} alt='Avatar' />
          </div>
          <div>
            <button className='voyti' onClick={handleLogin}>
              <p className='text'>Войти</p>
            </button>
          </div>
          <div className='kor'>
            <div className='korsina'>
              <img className='img' src={ico2} alt='Korsina' />
              <p>Корзина</p>
            </div>
          </div>
          <div className='isbrannoe'>
            <img className='img' src={ico3} alt='Isbrannoe' />
            <p>Избранное</p>
          </div>
          <div className='prosmotrennie'>
            <img className='img' src={ico4} alt='Prosmotrennie' />
            <p>Просмотренные</p>
          </div>
        </div>
      ) : (
        <Account />
      )}
      {opened && <Vhod setIsLogged={setIsLogged} />}
    </div>
  );
};

export default Okno;