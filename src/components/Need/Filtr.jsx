import ico1 from "../Img/logo2.png";
import "./Filtr.css";

const Filtr = () => {
  return (
    <div className="filtr">
      <div></div>
      <div className="navbar">
        <div className="stolb1">
          <img className="logotip" scr={ico1} />
          <div className="kategoria">Женщинам</div>
          <div className="kategoria">Мужчинам</div>
          <div className="kategoria">Детям</div>
          <div className="kategoria">Обувь</div>
          <div className="kategoria">Игрушки</div>
          <div className="kategoria">Аксессуары</div>
          <div className="kategoria">Большие размеры</div>
          <div className="kategoria">Дополнительно </div>
          <div className="kategoria">Акции</div>
        </div>
        <div className="stolb2">
          <div className="kategoria2">Майки</div>
          <div className="kategoria2">Костюмы</div>
          <div className="kategoria2">Брюки</div>
          <div className="kategoria2">Джинсы</div>
          <div className="kategoria2">Юбки</div>
          <div className="kategoria2">Шорты </div>
          <div className="kategoria2">Свитшоты, худи</div>
          <div className="kategoria2">Блузки и рубашки</div>
          <div className="kategoria2">Пиджаки и жакеты</div>
          <div className="kategoria2">Платья и сарафаны</div>
          <div className="kategoria2">Верхняя одежда</div>
        </div>
      </div>
    </div>
  );
};
export default Filtr;
