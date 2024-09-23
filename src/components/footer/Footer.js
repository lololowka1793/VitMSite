import React from "react";
import "./style.css";

// Импорт иконок для контактов
import phoneIcon from './../../img/icons/phone.svg';
import emailIcon from './../../img/icons/email.svg';
import locationIcon from './../../img/icons/location.svg';
import { Link } from "react-router-dom"; // Импорт Link для кнопки

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* Контактная информация с иконками */}
          <div className="contact-info">
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="icon" />
              <p>Телефон: +373 6300/10/19</p>
            </div>
            <div className="contact-item">
              <img src={emailIcon} alt="Email" className="icon" />
              <p>Email: vitmservice@mail.ru</p>
            </div>
            <div className="contact-item">
              <img src={locationIcon} alt="Location" className="icon" />
              <p>Адрес: Strada Alexei Russo 22, Cahul</p>
            </div>
          </div>

          {/* Блок отзывов (Google Maps) */}
          <div className="reviews">
            <h3>Отзывы</h3>
            <p>
              Ознакомьтесь с отзывами клиентов на{" "}
              <a
                href="https://maps.app.goo.gl/nRGphNCFwGFPcLtv5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </p>
          </div>

          {/* Кнопка "Записаться на обслуживание" */}
          <div className="service-button-wrapper">
            <Link to="/booking" className="service-button">
              Записаться на обслуживание
            </Link>
          </div>
        </div>

        {/* Копирайт */}
        <div className="copyright">
          <p>© 2024 Vit&M Service. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
