import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  // Загружаем список бронирований из MongoDB
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch('/api/bookings');
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Панель администратора</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.fullName} - {booking.carBrand} ({booking.phone})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
