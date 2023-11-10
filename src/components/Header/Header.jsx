import React, { useState } from 'react';
import MenuIco from "../Img/menu.png";
import Ico1 from "../Img/chelik.svg";
import Ico2 from "../Img/like.svg";
import Ico3 from "../Img/korsina.svg";
import Ico4 from "../Img/lupa.svg";
import './Header.css';

import Okno from '../Need/Okno';

const Header = () => {
  const [showWindow, setShowWindow] = useState(false);

  const handleButtonClick = () => {
    setShowWindow((prevShowWindow) => !prevShowWindow); // Toggle the value of showWindow
  };

  return (
    <div className='header'>
      <button className='menu'>
        <img src={MenuIco} alt='' />
      </button>
      <button className='button' >
        <img src={Ico4} alt='' />
      </button>
      <input type='text' className='search' placeholder='Поиск' />
      <button className='button' onClick={handleButtonClick}>
        <img src={Ico1} alt='' />
      </button>
      <button className='button'>
        <img src={Ico2} alt='' />
      </button>
      <button className='button'>
        <img src={Ico3} alt='' />
      </button>

      {showWindow && <Okno />}
    </div>
  );
}

export default Header;