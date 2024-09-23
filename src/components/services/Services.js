import React from 'react';
import './Services.css';


import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';


const servicesData = [
  { id: 1, title: 'ДИАГНОСТИКА И РЕМОНТ ХОДОВОЙ', img: image1 },
  { id: 2, title: 'ЗАМЕНА ПРУЖИН И АМОРТИЗАТОРОВ', img: image2 },
  { id: 3, title: 'ДИАГНОСТИКА И РЕМОНТ ТОРМОЗНОЙ СИСТЕМЫ', img: image3 },
  { id: 4, title: 'ЗАМЕНА МАСЛА В ДВИГАТЕЛЕ И МКПП', img: image4 },
  { id: 5, title: 'РАЗВАЛ СХОДЖЕНИЕ', img: image5 },
  { id: 6, title: 'ЗАМЕНА ЦЕПЕЙ И РЕМНЕЙ ГРМ', img: image6 },
  { id: 7, title: 'РЕМОНТ ВЫХЛОПНОЙ СИСТЕМЫ', img: image7 },
  { id: 8, title: 'ЗАМЕНА ВСЕХ ФИЛЬТРОВ', img: image8 },
  // Добавьте больше данных по аналогии
];

const Services = () => {
  return (
    <section className="services">
      <h2>Наши услуги</h2>
      <div className="services-container">
        {servicesData.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.img} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
