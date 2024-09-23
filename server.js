const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Создаем приложение
const app = express();

// Используем CORS
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
const mongoURI = 'mongodb+srv://demosss1232:6werty@cluster0.zz5q2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB: ', err));

// Создание схемы для записи
const bookingSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  carBrand: String,
  year: Number,
  reason: String,
  date: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// Маршрут для отправки записи
app.post('/api/bookings', (req, res) => {
  const { fullName, phone, carBrand, year, reason } = req.body;

  const newBooking = new Booking({
    fullName,
    phone,
    carBrand,
    year,
    reason
  });

  newBooking.save()
  .then(() => res.status(201).json('Запись успешно сохранена'))
  .catch(err => {
    console.error('Ошибка при сохранении записи:', err);
    res.status(500).json('Ошибка сервера');
  });
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require('path');

// В production обслуживаем статические файлы из React
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

