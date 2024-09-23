import React from "react";
import "../styles/Promotions.css";
import podarok from '../img/icons/podarok.png'

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "ОСТАВЬВЕ ЭЛЕКТРОННУЮ ЗАЯВКУ У НАС НА САЙТЕ СЕЙЧАС",
      description: "И ПОЛУЧИТЕ БЕСПЛАТНУЮ ДИАГНОСТИКУ ХОДОВОЙ",
    },
    {
      id: 2,
      title: "ПРИ ПОКУПКЕ МОТОРНОГО МАСЛА В НАШЕМ МАГАЗИНЕ",
      description: "МЫ ЗАМЕНИМ ЕГО БЕСПЛАТНО!",
    },
  ];

  return (
    <section className="promotions-section">
      <div className="container">
        <h2 className="promotions-title">🎁 Активные акции 🎉</h2>
        <div className="promotions-grid">
          {promotions.map((promo) => (
            <div key={promo.id} className="promotion-item">
              <h3 className="promotion-title">{promo.title}</h3>
              <p className="promotion-description">{promo.description}</p>
              {/* Добавление изображения подарка */}
              <img
                src={podarok}
                alt="Подарок"
                className="gift-icon"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
