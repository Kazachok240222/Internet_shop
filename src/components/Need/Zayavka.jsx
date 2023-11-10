import ico1 from "../Img/krest.svg";
import "./Zayavka.css";
import { useState } from "react";

const Zayavka = () => {
  const [isShown, setIsShown] = useState(true);

  const handleExitClick = () => {
    setIsShown(false);
  };

  if (!isShown) {
    return null;
  }

  return (
    <div className="Zayavka">
      <button className="exit" onClick={handleExitClick}>
        <img src={ico1} alt="Иконка" />
      </button>
      {/* <div className="krugi"></div> */}
      <p className="zag">Ваша заявка обрабтывается</p>
      <p className="podpis">Наш специалист с Вами свяжется в ближайшее время</p>
      <p className="spasibo">Спасибо!</p>
    </div>
  );
};

export default Zayavka;