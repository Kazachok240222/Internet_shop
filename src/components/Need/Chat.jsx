import React, { useState } from 'react';
import './Chat.css';
import ico1 from '../Img/Ava.svg';
import ico2 from '../Img/krest.svg';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setChatOpen] = useState(true);

  const generateReply = () => {
    const replies = [
      'Как я могу помочь вам?',
      'Я готов ответить на ваши вопросы!',
      'Чем могу быть полезен?',
      'Уточните свой вопрос, пожалуйста.',
      'Я здесь, чтобы вам помочь!',
    ];
    const randomIndex = Math.floor(Math.random() * replies.length);
    return replies[randomIndex];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const message = input.value.trim();
    if (message !== '') {
      setMessages((prevMessages) => [...prevMessages, message, generateReply()]);
      input.value = '';
    }
  };

  const handleExitChat = () => {
    setChatOpen(false);
  };

  if (!isChatOpen) {
    return null; 
  }

  return (
    <div className="Chat">
      <button className="exit"  onClick={handleExitChat}><img src ={ico2}/></button>
      <div className="shapka">
        <img className="ava" src={ico1} alt="Аватар" />
        <div className="name">Сережа</div>
        <div className="job">Консультант</div>
      </div>
      <div className="Chay-pole">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" className="message-input" placeholder="Поиск" />
        {/* <button type="submit" className="send-button">
          Отправить
        </button> */}
      </form>
    </div>
  );
};

export default Chat;