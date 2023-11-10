import React, { useState } from 'react';
import Chat from '../Need/Chat.jsx';
import chat from '../Img/chat.svg';
import './WhyUs.css';

const Why = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isChatClosed, setIsChatClosed] = useState(false);

    const handleOpenChat = () => {
        setIsChatOpen(true);
        setIsChatClosed(false);
    };

    const handleCloseChat = () => {
        setIsChatClosed(true);
    };

    return (
        <div className='Why'>
            <p className='zag'>Почему выбирают нас?</p>
            <div className='content'>
                <button className='Up'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                        <g filter="url(#filter0_d_180_2)">
                            <circle cx="46" cy="42" r="36" fill="#514A7E" />
                            <path d="M46.3536 28.6464C46.1583 28.4512 45.8417 28.4512 45.6464 28.6464L42.4645 31.8284C42.2692 32.0237 42.2692 32.3403 42.4645 32.5355C42.6597 32.7308 42.9763 32.7308 43.1716 32.5355L46 29.7071L48.8284 32.5355C49.0237 32.7308 49.3403 32.7308 49.5355 32.5355C49.7308 32.3403 49.7308 32.0237 49.5355 31.8284L46.3536 28.6464ZM46.5 55L46.5 29L45.5 29L45.5 55L46.5 55Z" fill="#FFFDF5" />
                        </g>
                        <defs>
                            <filter id="filter0_d_180_2" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.31816 0 0 0 0 0.289236 0 0 0 0 0.495833 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_180_2" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_180_2" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
                <div className='p1'>
                    <p>Скидки постоянным клиентам от 5%</p>
                </div>
                <div className='p2'>
                    <p>Возможность доставки в любой город Беларуси</p>
                </div>
                <div className='p1'>
                    <p>Предлагаем самые выгодные цены</p>
                </div>
                <div className='p1'>
                    <p>Наши покупатели всегда остаются довольны</p>
                </div>
                <div className='p2'>
                    <p>Пункты выдачи заказов рядом с домом</p>
                </div>
                <div className='p1'>
                    <p>Ширикий ассортимент товаров для всей семьи</p>
                </div>
                <button className='ChatButton' onClick={isChatClosed ? handleOpenChat : handleCloseChat}>
                    <img src={chat} alt="Chat" />
                    
                </button>
            </div>
            {isChatOpen && <Chat />}
        </div>
    );
};

export default Why;