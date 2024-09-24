import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Используем для перенаправления

const AdminLogin = () => {
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
      navigate('/admin-panel'); // Перенаправляем на панель при успешном входе
    } else {
      setError('Неправильный логин или пароль');
    }
  };

  return (
    <div>
      <h2>Админ Вход</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Логин:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
