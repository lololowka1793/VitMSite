import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
  // Состояние для данных формы
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    carBrand: '',
    year: '',
    reason: ''
  });

  // Состояние для отслеживания загрузки
  const [loading, setLoading] = useState(false);

  // Функция для обновления данных формы
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Функция для отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Если какое-либо поле пустое, показываем ошибку
    if (!formData.fullName || !formData.phone || !formData.carBrand || !formData.year || !formData.reason) {
      alert('Все поля должны быть заполнены');
      return;
    }

    // Устанавливаем статус загрузки в true
    setLoading(true);

    try {
      // Отправляем данные на сервер
      const response = await fetch('https://vit-m-site.vercel.app/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Если запрос успешен
      if (response.ok) {
        alert('Запись успешно отправлена');
        // Очищаем данные формы
        setFormData({
          fullName: '',
          phone: '',
          carBrand: '',
          year: '',
          reason: ''
        });
      } else {
        // Если сервер вернул ошибку
        const errorData = await response.json();
        alert(`Ошибка при отправке: ${errorData}`);
      }
    } catch (error) {
      // Если возникла ошибка при запросе
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке');
    } finally {
      // Независимо от результата, отключаем режим загрузки
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <h2>Онлайн запись</h2>
      
      {/* Индикатор загрузки */}
      {loading && <p>Отправка данных, пожалуйста, подождите...</p>}
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Ваше ФИО:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Номер телефона:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Марка автомобиля:
          <input type="text" name="carBrand" value={formData.carBrand} onChange={handleChange} required />
        </label>
        <label>
          Год выпуска:
          <input type="number" name="year" value={formData.year} onChange={handleChange} required />
        </label>
        <label>
          Причина обращения:
          <textarea name="reason" value={formData.reason} onChange={handleChange} required />
        </label>

        {/* Кнопка отправки */}
        <button type="submit" disabled={loading}>
          {/* Меняем текст кнопки, если идет загрузка */}
          {loading ? 'Отправка...' : 'Записаться'}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
