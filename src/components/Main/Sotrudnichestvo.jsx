import ico1 from '../Img/shesyernia.svg' 
import ico2 from '../Img/spisok.svg'
import ico3 from '../Img/ludi.svg'
import ico4 from '../Img/money.svg'
import './Sotrudnichestvo.css'

const Sotrud = () => {
  return (
    <div className="sotrud">
      <p className="zag">Сотрудничество с нами</p>
      <div className="content">
        <p className="zagolovok">Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения.</p>
        <div className="variants">
          <div className="variant">
            <p className="name">Становитесь партнером</p>
            <p className="description">Регистрируйтесь и переходите в свой кабинет</p>
          </div>
          <div className="variant">
            <p className="name">Рекламируйте товары</p>
            <p className="description">Рекламируйте наши товары на форумах, сайтах, в социальных сетях</p>
          </div>
          <div className="variant">
            <p className="name">Приводите покупателей</p>
            <p className="description">Приводите покупателей на наш сайт по уникальной ссылке</p>
          </div>
          <div className="variant">
            <p className="name">Получайте бонусы</p>
            <p className="description">Копите бонусы от каждого оплаченного заказа</p>
          </div>
        </div>

        <p className="zagolovok2">Это выгодно. Какие преимущества?</p>
        <div className="preimushestva">
          <div className="preimushestvo">
            <button className = 'button'>
              <img className='img' src={ico1} />
              <p className="description">Автоматизация процессов</p>
            </button>
            
          </div>
          <div className="preimushestvo">
            <button className = 'button'>
              <img className='img' src={ico2} /><p className="description">Пополнение ассортимента</p>
            </button>
            
          </div>
          <div className="preimushestvo">
            <button className = 'button'>
              <img className='img' src={ico3} /><p className="description">Поддержка и обучение</p>
            </button>
            
          </div>
          <div className="preimushestvo">
            <button className = 'button'>
              <img className='img' src={ico4} /><p className="description">Бонусы за новых клиентов</p>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sotrud;