import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css'; // Подключаем файл стилей

const AdminLogin = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем данные на сервер для проверки
    const response = await fetch('/api/admin-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setIsAdmin(true); // Обновляем состояние админа
        navigate('/admin-panel'); // Перенаправляем на панель при успешном входе
      } else {
        setError('Неправильный логин или пароль');
      }
    } else {
      setError('Произошла ошибка на сервере');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Вход для администратора</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Логин:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите логин"
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </label>
          <button type="submit">Войти</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
