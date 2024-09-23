import React from "react";
import '../styles/Contacts.css'; // Импортируем обновленный CSS

const Contacts = () => {
	return (
	  <div className="contacts-container">
		<div className="contacts-wrapper">
		  {/* Contact Information */}
		  <div className="contact-info">
  			<h3>Телефоны</h3>
  				<p><strong><a href="tel:+37369070479">+373 69 070 479</a></strong> (Виталий)</p>
  				<p><strong><a href="tel:+37379523732">+373 79 523 732</a></strong> (Михаил)</p>
  				<p><strong><a href="tel:+37378244172">+373 78 244 172</a></strong> (Иван)</p>
  				<p><strong><a href="tel:+37379806292">+373 79 806 292</a></strong> (Магазин)</p>

  
			<hr className="divider" />
  
			<h3>Адрес</h3>
			<p>Strada Alecu Russo 22, Cahul</p>
  
			<hr className="divider" />
  
			<h3>Email</h3>
			<p><a href="mailto:vitmservice@mail.ru">vitmservice@mail.ru</a></p>
		  </div>
  
		  {/* Google Map */}
		  <div className="map-container">
			<iframe
			  title="Google Map"
			  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963.3729868997734!2d28.196209095666365!3d45.89873854733974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65cbfa69f61e7%3A0x1f3065ef170b3a0b!2sAutoservis%20Castrol!5e0!3m2!1sru!2s!4v1726988806370!5m2!1sru!2s"
			  allowFullScreen=""
			  loading="lazy"
			></iframe>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Contacts;