document.addEventListener("scroll", function() {
    const elementsFadeIn = document.querySelectorAll(".fade-in");
    const elementsFadeInR = document.querySelectorAll(".fade-in-r");
    const elementsFadeInL = document.querySelectorAll(".fade-in-l");
    
    function handleScrollAnimation(elements, className) {
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add(className);
            }
        });
    }
    
    handleScrollAnimation(elementsFadeIn, "show");
    handleScrollAnimation(elementsFadeInR, "show-x");
    handleScrollAnimation(elementsFadeInL, "show-x");
});

window.addEventListener('load', function () {
    // Находим прелоадер
    const preloader = document.querySelector('.preloader');

    // Добавляем класс для анимации перемещения вверх
    preloader.classList.add('slideUp');

    // Ждем завершения анимации (примерно 1 секунда)
    setTimeout(function () {
        // Скрываем прелоадер
        preloader.style.display = 'none';
    }, 3000); // Измените значение на свое усмотрение
});
