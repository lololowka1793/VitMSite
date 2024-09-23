// api/bookings.js
import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://demosss1232:6werty@cluster0.zz5q2.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookingSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  carBrand: String,
  year: Number,
  reason: String,
  date: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default async function handler(req, res) {
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
      res.status(201).json({ message: 'Запись успешно сохранена' });
    } catch (err) {
      res.status(500).json({ error: 'Ошибка при сохранении записи' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
