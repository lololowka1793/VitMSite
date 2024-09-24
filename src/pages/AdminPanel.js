import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>Онлайн записи</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <p>ФИО: {booking.fullName}</p>
            <p>Телефон: {booking.phone}</p>
            <p>Марка автомобиля: {booking.carBrand}</p>
            <p>Год выпуска: {booking.year}</p>
            <p>Причина: {booking.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
