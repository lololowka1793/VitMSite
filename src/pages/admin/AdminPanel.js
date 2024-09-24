import React, { useEffect, useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Получаем текущие записи при загрузке страницы
    const fetchBookings = async () => {
      const response = await fetch('/api/bookings');
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();

    // Создаем соединение с WebSocket сервером
    const socket = new WebSocket('ws://your-server-url');

    // Когда поступает сообщение от сервера
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'newBooking') {
        setBookings((prevBookings) => [...prevBookings, message.data]);
      }
    };

    // Закрываем WebSocket при выходе со страницы
    return () => {
      socket.close();
    };
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
