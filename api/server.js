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
  admin: 'adminpassword123' // Поменяй на свои значения
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

module.exports = app; // Экспортируем для использования в Vercel

















/*const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');  // Для парсинга тела запроса

const app = express();
app.use(bodyParser.json());  // Middleware для обработки JSON в теле запроса

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

module.exports = async (req, res) => {
  if (req.method === 'POST') {
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
      res.status(201).json({ message: 'Запись успешно сохранена' });  // Отправляем JSON-ответ
    } catch (err) {
      console.error('Ошибка при сохранении записи:', err);
      res.status(500).json({ error: 'Ошибка сервера' });  // Отправляем JSON-ответ
    }
  } else {
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
}; */



/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Создаем приложение
const app = express();

// Используем CORS
app.use(cors({
  origin: '*'  // Разрешить запросы с любого домена
}));
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
  console.log('Request body:', req.body);  // Логирование данных запроса
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
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}*/