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
      text: 'МЕНЕДЖЕР ЗАПИСАЛ АВТОМОБИЛЬ НА ОСМОТР В УДОБНОЕ ДЛЯ ВАС ВРЕМЯ',
    },
    {
      id: 3,
      text: 'МАСТЕР, ОБГОВОРИВ С ВАМИ ДЕТАЛИ, ОПРЕДЕЛЯЕТ ФРОНТ РАБОТ',
    },
    {
      id: 4,
      text: 'МЕНЕДЖЕР ВЫПИСЫВАЕТ ЗАКАЗ-НАРЯД С УКАЗАНИЕМ ВСЕХ РАБОТ И СРОКОМ ИХ ИСПОЛНЕНИЯ',
    },
    {
      id: 5,
      text: 'МАСТЕР РЕМОНТИРУЕТ ВАШ АВТОМОБИЛЬ СО СТРОГИМ СООТВЕТСТВИЕМ СТАНДАРТОВ ПРОИЗВОДИТЕЛЯ',
    },
    {
      id: 6,
      text: 'В НАЗНАЧЕННЫЙ ДЕНЬ, ВАМ ПЕРЕЗВОНИТ МЕНЕДЖЕР И СООБЩИТ О РЕЗУЛЬТАТАХ РЕМОНТА',
    },
    {
      id: 7,
      text: 'В УДОБНОЕ ВРЕМЯ ВЫ МОЖЕТЕ ЗАБРАТЬ ПОЛНОСТЬЮ ОТРЕМОНТИРОВАННЫЙ АВТОМОБИЛЬ',
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
