import ico1 from '../Img/krest.svg';
import './Registration.css';
import React, { useState } from 'react';

const Reg = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        index: '',
        address: '',
        email: '',
        comment: '',
        password: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleFormSubmit = () => {
        
        localStorage.setItem('formData', JSON.stringify(formData));
        setIsSubmitted(true);
    };

    if (!isOpen) {
        return null; 
    }

    if (isSubmitted) {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        const { fullName } = savedFormData;

        return (
            <div className='Registration'>
                <div className='content'>
                    <button className='exit' onClick={handleClose}><img src={ico1} alt="кнопка закрытия" /></button>
                    <div className='zag'>Регистрация</div>
                    <div className='welcome'>Добро пожаловать, {fullName}!</div>
                </div>
            </div>
        );
    }

    return (
        <div className='Registration'>
            <div className='content'>
                <button className='exit' onClick={handleClose}><img src={ico1} alt="кнопка закрытия" /></button>
                <div className='zag'>Регистрация</div>
                <div className='polia'>
                    <div className='stolb1'>
                        <div><input type='text' className='pole' name='fullName' placeholder='ФИО' onChange={handleInputChange} /></div>
                        <div><input type='text' className='pole' name='phoneNumber' placeholder='Контактный телефон' onChange={handleInputChange} /></div>
                        <div>
                            <input type='text' className='pole' name='index' placeholder='Индекс' onChange={handleInputChange} />
                            <label className='checkbox-label'>
                                <input type='checkbox' className='checkbox' />
                                <p className='text'>Даю согласие на обработку персональных данных</p>
                            </label>
                        </div>
                    </div>
                    <div className='stolb2'>
                        <div><input type='text' className='pole' name='address' placeholder='Ваш полный адрес (только РБ)' onChange={handleInputChange} /></div>
                        <div><input type='text' className='pole' name='email' placeholder='Электронная почта' onChange={handleInputChange} /></div>
                        <div><input type='text' className='pole' name='comment' placeholder='Комментарий' onChange={handleInputChange} /></div>
                        <div><input type='text' className='pole' name='password' placeholder='Пароль' onChange={handleInputChange} /></div>
                    </div>
                </div>
            <button className='otprav' onClick={handleFormSubmit}>Отправить
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                    <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5" />
                </svg>
            </button>
            <button className='vhod'>Войти в кабинет</button>
        </div>
    </div>
);
}

export default Reg;