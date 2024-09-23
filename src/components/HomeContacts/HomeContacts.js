import React from 'react';
import './HomeContacts.css';

const HomeContacts = () => {
  return (
    <div className="home-contacts-container">
      <h2>НАШИ КОНТАКТЫ</h2>
      <div className="home-contacts-details">
        <div className="contact-item">
          <h3>Телефон:</h3>
          <p>+373 69070479</p>
        </div>
        <div className="contact-item">
          <h3>Email:</h3>
          <p>vitmservice@mail.ru</p>
        </div>
        <div className="contact-item">
          <h3>Адрес:</h3>
          <p>Strada Alecu Russo 22, Cahu</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1388.3347392360988!2d28.197715221862897!3d45.897923191408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65cbfa69f61e7%3A0x1f3065ef170b3a0b!2sAutoservis%20Castrol!5e0!3m2!1sru!2s!4v1726919552530!5m2!1sru!2s"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeContacts;
