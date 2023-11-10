import React, { useState } from 'react';
import './Priglashenie.css';
import Zayavka from '../Need/Zayavka';

const Priglosh = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);
  };

  return (
    <div className='priglosh'>
      <div className='fon2'>
        <div className='fon'>
          <p className='zagolovok'>
            Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров
          </p>

          {!isFormSubmitted ? (
            <div className='content'>
              <form onSubmit={handleSubmit}>
                <div className='polevoda'>
                  <input
                    type='text'
                    className='pole'
                    placeholder='Ваше имя'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='polevoda'>
                  <input
                    type='text'
                    className='pole'
                    placeholder='Номер телефона'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='polevoda'>
                  <input
                    type='text'
                    className='pole'
                    placeholder='Электронная почта'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label className='checkbox-label'>
                    <input type='checkbox' className='checkbox' required />
                    <p className='text'>Даю согласие на обработку персональных данных</p>
                  </label>
                </div>
                <button type='submit' className='otpravit'>
                  Отправить
                  <svg xmlns='http://www.w3.org/2000/svg' width='26' height='5' viewBox='0 0 26 5' fill='none'>
                    <path
                      d='M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z'
                      fill='#FFFDF5'
                    />
                  </svg>
                </button>
              </form>
            </div>
          ) : (
            <Zayavka formData={formData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Priglosh;