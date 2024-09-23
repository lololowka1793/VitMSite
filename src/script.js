window.addEventListener('load', function () {
    // Убираем preloader после загрузки контента
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    preloader.style.display = 'none'; // Скрыть preloader
    content.style.display = 'block'; // Показать контент
});