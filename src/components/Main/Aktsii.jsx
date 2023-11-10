import Ico2 from "../Img/like.svg";
import Ico3 from "../Img/korsina.svg";
import Ico1 from '../Img/aktsia1.png';
import star from '../Img/star.svg'
import './Aktsii.css'

const Aktsii = () => {
  return (
    <div className='Aktsii'>
      <p className='Uspey'>Успей купить!<span className='aktsii'> Акции</span> </p>
      <div className = 'content'>
        <div className = 'aksia' >
        <img className = 'ava'src={Ico1}/>
        <div className='prices'>
          <div className='price-new'>50.00 p.</div>
          <div className='price-old'><del>65.00 p.</del></div>
          <button className='like'><img src={Ico2} /></button>
          <button className='korsina'><img src={Ico3}/></button>
        </div>
        
        <div className='description'>Блузка женская классная </div>
        <div className='actions'><button className='podrobnee'>Подробнее<svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
<path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
</svg></button>
        <div className='stars'>
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div></div></div>
        <div className = 'aksia' >
        <img className = 'ava'src={Ico1}/>
        <div className='prices'>
          <div className='price-new'>50.00 p.</div>
          <div className='price-old'><del>65.00 p.</del></div>
          <button className='like'><img src={Ico2} /></button>
          <button className='korsina'><img src={Ico3}/></button>
        </div>
        
        <div className='description'>Блузка женская классная </div>
        <div className='actions'><button className='podrobnee'>Подробнее<svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
<path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
</svg></button>
        <div className='stars'>
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div></div></div>
      </div>
    </div>
  )
}


export default Aktsii