import React, { useEffect, useState } from 'react';
import './AdminPanel.css'; // Подключаем файл стилей

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch('/api/bookings'); // Получаем записи с сервера
      const data = await response.json();
      setBookings(data); // Сохраняем записи в состоянии
    };

    fetchBookings();
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
