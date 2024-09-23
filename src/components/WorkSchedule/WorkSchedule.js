// WorkSchedule.js
import React from 'react';
import './WorkSchedule.css'; // Подключение стилей

const WorkSchedule = () => {
  const schedule = [
    { day: 'Понедельник', hours: '08:00 - 17:00' },
    { day: 'Вторник', hours: '08:00 - 17:00' },
    { day: 'Среда', hours: '08:00 - 17:00' },
    { day: 'Четверг', hours: '08:00 - 17:00' },
    { day: 'Пятница', hours: '08:00 - 17:00' },
    { day: 'Суббота', hours: '08:00 - 14:00' },
    { day: 'Воскресенье', hours: 'Выходной' },
  ];

  return (
    <div className="work-schedule-container">
      <h2 className="work-schedule-title">График работы</h2>
      <table className="work-schedule-table">
        <thead>
          <tr>
            <th>День</th>
            <th>Часы работы</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkSchedule;
