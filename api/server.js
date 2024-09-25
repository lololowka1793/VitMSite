const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth'); // Для базовой авторизации

const app = express();
app.use(bodyParser.json()); // Для обработки JSON данных

// Подключение к MongoDB
const mongoURI = 'mongodb+srv://demosss1232:6werty@cluster0.zz5q2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB: ', err));

// Модель для записи
const Booking = mongoose.model('Booking', new mongoose.Schema({
  fullName: String,
  phone: String,
  carBrand: String,
  year: Number,
  reason: String,
  date: { type: Date, default: Date.now }
}));

// Базовая авторизация (логин и пароль)
const adminCredentials = {
  'admin': '6werty' // Здесь логин: пароль
};

app.use(basicAuth({
  users: adminCredentials,
  challenge: true, // Вызов браузера для ввода логина/пароля
  unauthorizedResponse: (req) => 'Неправильные учетные данные' // Сообщение об ошибке
}));

// Маршрут для получения всех записей
app.get('/api/admin/bookings', async (req, res) => {
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

// Маршрут для удаления записи
app.delete('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: 'Запись успешно удалена' });
  } catch (err) {
    console.error('Ошибка при удалении записи:', err);
    res.status(500).json({ error: 'Ошибка при удалении записи' });
  }
});

module.exports = app; // Экспортируем для использования в Vercel