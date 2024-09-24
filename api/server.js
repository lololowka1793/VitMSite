const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

const app = express();
app.use(bodyParser.json()); // Для обработки JSON данных

// Подключение к MongoDB
const mongoURI = 'mongodb+srv://demosss1232:6werty@cluster0.zz5q2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB: ', err));

// Модель для записей
const Booking = mongoose.model('Booking', new mongoose.Schema({
  fullName: String,
  phone: String,
  carBrand: String,
  year: Number,
  reason: String,
  date: { type: Date, default: Date.now }
}));

// Авторизация для маршрута входа в админ-панель
const adminCredentials = {
  login: 'admin',
  password: 'adminpassword123'
};

// Маршрут для авторизации
app.post('/api/admin-login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.login && password === adminCredentials.password) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Неправильный логин или пароль' });
  }
});

// Маршрут для получения всех записей
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Ошибка при получении записей:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для создания новых записей (например, с формы клиента)
app.post('/api/bookings', async (req, res) => {
  const { fullName, phone, carBrand, year, reason } = req.body;

  const newBooking = new Booking({
    fullName,
    phone,
    carBrand,
    year,
    reason
  });

  try {
    await newBooking.save();
    res.status(201).json({ message: 'Запись успешно сохранена' });
  } catch (err) {
    console.error('Ошибка при сохранении записи:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = app; // Экспортируем для использования в Vercel
