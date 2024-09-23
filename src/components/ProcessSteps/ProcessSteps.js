import React from 'react';
import './ProcessSteps.css';
import { Link } from 'react-router-dom';

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      text: 'ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ ИЛИ ЗВОНИТЕ В СЕРВИС',
    },
    {
      id: 2,
      text: 'МЕНЕДЖЕР ЗАПИСАЛ АВТОМОБИЛЬ НА ОСМОТР',
    },
    {
      id: 3,
      text: 'МАСТЕР, ОБГОВОРИВ С ВАМИ ДЕТАЛИ, ОПРЕДЕЛЯЕТ ФРОНТ РАБОТ',
    },
    {
      id: 4,
      text: 'МАСТЕР РЕМОНТИРУЕТ ВАШ АВТОМОБИЛЬ',
    },
    {
      id: 5,
      text: 'ВАМ ПЕРЕЗВОНИТ МЕНЕДЖЕР И СООБЩИТ О РЕЗУЛЬТАТАХ РЕМОНТА',
    },
    {
      id: 6,
      text: 'В УДОБНОЕ ВРЕМЯ ВЫ МОЖЕТЕ ЗАБРАТЬ ОТРЕМОНТИРОВАННЫЙ АВТОМОБИЛЬ',
    },
  ];

  return (
    <div className="process-steps">
      <h2>ПРОЦЕСС НАШЕЙ РАБОТЫ</h2>
      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.id} className="step-box">
            <div className="step-number">{step.id}</div>
            <div className="step-text">{step.text}</div>
          </div>
        ))}
      </div>
      <div className="action-button">
        <Link to="/booking" className="service-button">
          Записаться на обслуживание
        </Link>
      </div>
    </div>
  );
};

export default ProcessSteps;
