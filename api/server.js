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
      res.status(201).json('Запись успешно сохранена');
    } catch (err) {
      console.error('Ошибка при сохранении записи:', err);
      res.status(500).json('Ошибка сервера');
    }
  } else {
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
};
