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
    }, 2000); // Измените значение на свое усмотрение
});

//спойлер для меню footer

$(document).ready(function() {
    $('.footer-menu__title').click(function(event) {
        if ($('.footer-menu').hasClass('one')) {
            // Проверяем, не имеет ли элемент уже класс "active"
            if (!$(this).hasClass('active')) {
                // Удаляем класс "active" и скрываем смежные элементы у других заголовков
                $('.footer-menu__title').removeClass('active');
                $('.footer-menu__content').slideUp(300);
            }
        }
        // Теперь переключаем класс "active" и отображаем/скрываем смежные элементы
        $(this).toggleClass('active').nextAll().slideToggle(300);
    });
});


// $(document).ready(function() {
//     $('.footer-menu__title').click(function(event) {
//         $(this).toggleClass('active').nextAll().slideToggle(300);
//     });
// });

// $(document).ready(function() {
//     $('.footer-menu__title').click(function(event) {
//         if ($('.footer-menu').hasClass('one')) {
//             $('.footer-menu__title').not($(this)).removeClass('active');
//             $('.footer-menu__content').not($(this).next()).slideUp(300);
//         }
//         $(this).toggleClass('active').nextAll().slideToggle(300);
//     });
// });

$(document).ready(function() {
    $('.menu-burger__button').click(function(event) {
        $('.menu-burger__button,.menu-burger__list').toggleClass('active');
    });
});
