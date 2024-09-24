const mongoose = require('mongoose');

// Подключаемся к MongoDB
const mongoURI = 'mongodb+srv://demosss1232:6werty@cluster0.zz5q2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true
  }).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  

// Схема для записи
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
  if (req.method === 'GET') {
    // Обработка GET-запросов (получение всех записей)
    try {
      const bookings = await Booking.find(); // Получаем все записи
      res.status(200).json(bookings);
    } catch (err) {
      console.error('Ошибка при получении записей:', err);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  } else if (req.method === 'POST') {
    // Обработка POST-запросов (создание новой записи)
    const { fullName, phone, carBrand, year, reason } = req.body;

    // Создаём новую запись
    const newBooking = new Booking({
      fullName,
      phone,
      carBrand,
      year,
      reason
    });

    try {
      await newBooking.save(); // Сохраняем новую запись
      res.status(201).json({ message: 'Запись успешно сохранена' });
    } catch (err) {
      console.error('Ошибка при сохранении записи:', err);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  } else {
    // Если метод не поддерживается
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
};
