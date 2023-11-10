import React, { useState } from "react"; 
import img1 from "../Img/krestik.svg"; 
// import img2 from "../Img/krest.svg"; 
import "./Voprosi.css"; 
 
const Voprosi = () => { 
  const [expandedIndex, setExpandedIndex] = useState(null); 
 
  const handleQuestionClick = (index) => { 
    if (expandedIndex === index) { 
      setExpandedIndex(null); 
    } else { 
      setExpandedIndex(index); 
    } 
  }; 
 
  const Question = ({ questionText, answerText, index }) => ( 
    <div className="vopros">
      <div className="question-text" onClick={() => handleQuestionClick(index)}> 
        {questionText} 
        
      <div className="otveti"> 
        {expandedIndex === index && <p className="otvet">{answerText}</p>} 
      </div> </div>
      <button className="plus"> 
        <img src={img1} alt="Изображение" /> 
      </button> 
    </div> 
  ); 
 
  return ( 
    <div className="voprosi"> 
      <p className="zag"> 
        Часто задаваемые вопросы<span className="faq">FAQ</span> 
      </p> 
      <div className="content"> 
        <Question 
          questionText="Как сделать заказ?" 
          answerText="Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку 'заказать'. Выбирает способ оплаты и доставки и покупает товар." 
          index={0} 
        /> 
        <Question 
          questionText="Способы оплаты" 
          answerText="Ответ на вопрос" 
          index={1} 
        /> 
        <Question 
          questionText="Доставка" 
          answerText="Ответ на вопрос" 
          index={2} 
        /> 
        <Question 
          questionText="Сроки доставки" 
          answerText="Ответ на вопрос" 
          index={3} 
        /> 
        <Question 
          questionText="Как сделать обмен?" 
          answerText="Ответ на вопрос" 
          index={4} 
        /> 
        <Question 
          questionText="Как сделать возврат?" 
          answerText="Ответ на вопрос" 
          index={5} 
        /> 
        <Question 
          questionText="Куда и когда вернутся деньги за возвращённый товар?" 
          answerText="Ответ на вопрос" 
          index={6} 
        /> 
      </div> 
    </div> 
  ); 
}; 
export default Voprosi