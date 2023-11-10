
import React from 'react';
import ico1 from '../Img/default_ava.svg';
import ico2 from '../Img/korsina.svg'
import ico3 from '../Img/like.svg'
import ico4 from '../Img/eye.svg'
import './Account.css' 

const Account = () => {

    
    const nickname = sessionStorage.getItem('nickname');
    return (
        <div className='Account'>
            <div className = 'content'>
                <div className = 'avatar'>
                    <img className= 'avatar' src = {ico1}/>
                </div>
                <h1 className = 'nick'>{nickname}</h1>
                <div className = 'kor'>
                <div className = 'korsina'>
                    <img className = 'img' src = {ico2} />
                    <p>Корзина</p>
                </div></div>
                <div className = 'part2'>
                <div className = 'isbr'>
                    <img className = 'img' src = {ico3} />
                    <p>Избранное</p>
                </div>
                <div className = 'prosmotrennie'>
                    <img className = 'img' src = {ico4} />
                    <p>Просмотренные</p>
                </div>
                </div>
                <div className = 'part3'>
                <div className = 'bonus'>
                    <img className = 'img' src = {ico3} />
                    <p>Бонусы</p>
                </div>
                <div className = 'lich'>
                    <img className = 'img' src = {ico4} />
                    <p>Личные данные</p>
                </div>
                <div className = 'history'>
                    <img className = 'img' src = {ico4} />
                    <p>История покупок</p>
                </div></div>
                <div className = 'part4'>
                <div className = 'exitbutton'>
                    <img className = 'img' src = {ico3} />
                    <p>Выйти</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Account