import ava1 from '../Img/ava1.svg';
import star from '../Img/star.svg'
import './Otsivi.css'

const Otsivi = () => {
    return (
        <div className='Otsivi'>
            <p className = 'zag'>Отзывы наших покупателей </p>
            <div className ='vse-otsivi'>
            <div className = 'Otsiv'>
                <img className = 'avatar' src = {ava1}/>
                <div className = 'content'>
                <div className ='stars'>
                    <img src = {star}/>
                    <img src = {star}/>
                    <img src = {star}/>
                    <img src = {star}/>
                    <img src = {star}/>
                </div>
                <div><p className = 'description'>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.</p> </div>
                <div className = 'user'>Анна Котлова</div>
                <div className ='date'>23.05.2021</div>
            </div></div>
            <div className = 'Otsiv'>
                <img className = 'avatar' src = {ava1}/>
                <div>
                <div className ='stars'>
                    <img src = {star}/>
                    <img src = {star}/>
                    <img src = {star}/>
                    <img src = {star}/>
                    <img src = {star}/>
                </div>
                <div><p className = 'description'>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.</p> </div>
                <div className = 'user'>Анна Котлова</div>
                <div className ='date'>23.05.2021</div>
            </div></div><div className = 'next'>
                <button className = 'nextbutton'><svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                <circle cx="46" cy="46" r="45.5" stroke="#514A7E"/>
                <path d="M65.159 47.8619C65.3543 47.6666 65.3543 47.35 65.159 47.1547L61.9771 43.9728C61.7818 43.7775 61.4652 43.7775 61.27 43.9728C61.0747 44.168 61.0747 44.4846 61.27 44.6799L64.0984 47.5083L61.27 50.3367C61.0747 50.532 61.0747 50.8486 61.27 51.0438C61.4652 51.2391 61.7818 51.2391 61.9771 51.0438L65.159 47.8619ZM27.1475 48.0083H64.8055V47.0083H27.1475V48.0083Z" fill="#514A7E"/>
                </svg></button>
            </div></div>
            <div className= 'dobavitotsiv'>
                <button className = 'addbutton'><p className ='text'>Добавить отзыв</p></button>
            </div>
            
           
        </div>
    )
}

export default Otsivi