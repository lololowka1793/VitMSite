// Функция, которая будет выполнена после полной загрузки страницы
window.addEventListener('load', function () {
    // Получаем элементы preloader и content
    const preloader = document.getElementById('preloader'); // Элемент с анимацией
    const content = document.getElementById('content');     // Основной контент страницы
    
    // Проверяем, что оба элемента существуют на странице
    if (preloader && content) {
        // Скрываем прелоадер
        preloader.style.display = 'none';
        
        // Показываем контент
        content.style.display = 'block';
    } else {
        console.error("Preloader or content elements not found");
    }
});
