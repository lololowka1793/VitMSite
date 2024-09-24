const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth'); // Для базовой авторизации
const WebSocket = require('ws'); // WebSocket для реального времени

const app = express();
app.use(bodyParser.json()); // Для обработки JSON данных

// Подключение к MongoDB
const mongoURI = 'mongodb+srv://demosss1232:6werty@cluster0.zz5q2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

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

// Создаем WebSocket сервер
const wss = new WebSocket.Server({ noServer: true });

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

    // Уведомляем все подключенные WebSocket клиенты о новой записи
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'newBooking', data: newBooking }));
      }
    });
  } catch (err) {
    console.error('Ошибка при сохранении записи:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Настройка WebSocket для обновлений в реальном времени
wss.on('connection', (ws) => {
  console.log('Подключен новый WebSocket клиент');
});

// Подключаем WebSocket к HTTP серверу
const server = app.listen(5000, () => console.log('Server running on port 5000'));
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

module.exports = server;
