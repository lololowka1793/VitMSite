import React, { useEffect, useState, useRef } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const previousBookingsLength = useRef(0); // Храним количество записей до обновления

  useEffect(() => {
    // Функция для воспроизведения звука
    const playSound = () => {
      const audio = new Audio('/sounds/notification.mp3'); // Путь к звуковому файлу
      audio.play().catch((error) => {
        console.error('Ошибка воспроизведения звука:', error);
      });
    };

    // Функция для получения данных с сервера
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings');
        const data = await response.json();

        // Если количество записей увеличилось, играем звук
        if (data.length > previousBookingsLength.current) {
          playSound();
        }

        previousBookingsLength.current = data.length; // Обновляем длину записей
        setBookings(data); // Сохраняем записи в состоянии
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    // Начальная загрузка данных
    fetchBookings();

    // Обновляем данные каждые 10 секунд
    const interval = setInterval(fetchBookings, 10000); // 10 секунд

    // Очищаем интервал при выходе со страницы
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-panel-container">
      <h2>Онлайн записи</h2>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking._id} className="booking-item">
            <p><strong>ФИО:</strong> {booking.fullName}</p>
            <p><strong>Телефон:</strong> {booking.phone}</p>
            <p><strong>Марка автомобиля:</strong> {booking.carBrand}</p>
            <p><strong>Год выпуска:</strong> {booking.year}</p>
            <p><strong>Причина:</strong> {booking.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
