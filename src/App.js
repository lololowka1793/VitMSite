import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import BookingPage from './components/BookingPage/BookingPage';
import Recommendations from './pages/Recommendations';
import Promotions from './pages/Promotions';

import AdminLogin from './pages/AdminLogin';  // Добавляем страницу авторизации
import AdminPanel from './pages/AdminPanel';  // Добавляем панель администратора

import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/promotions" element={<Promotions />} />
          {/* Добавляем маршруты для авторизации и админ-панели */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </div>
  );
}

export default App;
