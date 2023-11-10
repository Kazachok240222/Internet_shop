import img1 from '../Img/left.png'
import img2 from '../Img/right.png'
import './Welcome.css'

const Welcome = () => {
    return (
      <div className='Welcome'>
        <div>
          <div className='image'>
            <img className='img2' src={img2} alt='' />
            <img className='img1' src={img1} alt='' />
          </div>
        </div>
        <p className='dobro'>
          Добро пожаловать в <span className='Cokteil'>Cokteil</span>
        </p>
        <p className='ekonom'>
          Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие сроки!
        </p>
  
        <div className='button-katalog-container'>
          <button className='button-katalog'>
            <p className='button-text'>Каталог</p>
            <svg
              className='strelka'
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="8"
              viewBox="0 0 80 8"
              fill="none"
            >
              <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  
  export default Welcome;