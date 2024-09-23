import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import upArrowIcon from './up_arrow.svg'; // Импортируем иконку

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем кнопку при прокрутке вниз
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <img src={upArrowIcon} alt="Наверх" className="scroll-icon" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
