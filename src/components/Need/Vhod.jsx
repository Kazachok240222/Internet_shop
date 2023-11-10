import React, { useState } from 'react';
import ico1 from '../Img/krest.svg';
import './Vhod.css';
import Reg from './Registration';
import Account from './Account';

const Vhod = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [nickname, setNickname] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegistration = () => {
    setShowRegistration(true);
    setIsOpen(false);
  };

  const handleLogin = () => {
    
    const storedNickname = localStorage.getItem('nickname');
    const storedFullName = localStorage.getItem('fullName');
    
    if (storedNickname === nickname) {
      
      sessionStorage.setItem('nickname', storedNickname);
      
      
      localStorage.setItem('fullName', storedFullName);
  
      setShowAccount(true);
      setIsOpen(false);
    } else {
      
      console.log('Invalid credentials');
    }
  };

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <div className='Vhod'>
          <button className='exit' onClick={handleClose}>
            <img src={ico1} alt='Exit' />
          </button>
          <div className='zag'>Вход в личный кабинет</div>
          <div>
            <input type='text' className='pole' placeholder='Электронная почта' />
          </div>
          <input type='text' className='pole' placeholder='Пароль' onChange={handleInputChange} />
          <p className='nepomnu'>Не помню пароль</p>
          <button className='vhod' onClick={handleLogin}>Войти в кабинет</button>
          <button className='registration' onClick={handleRegistration}>Регистрация</button>
        </div>
      )}
      {showRegistration && <Reg />}
      {showAccount && <Account />}
    </>
  );
};

export default Vhod;