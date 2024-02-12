document.addEventListener('DOMContentLoaded', function () {
    // Находим элементы управления и слайдеры
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let sliders = document.querySelectorAll('.image-slider .slider');
    let currentSliderIndex = 0;

    // Функция для переключения слайдера
    function switchSlider(index) {
        sliders[currentSliderIndex].style.display = 'none';
        currentSliderIndex = (index + sliders.length) % sliders.length;
        sliders[currentSliderIndex].style.display = 'block';
        initSliderHandle(sliders[currentSliderIndex]); // Инициализируем ползунок для нового слайдера
    }

    // Обработчики событий для кнопок переключения
    prevButton.addEventListener('click', function () {
        switchSlider(currentSliderIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        switchSlider(currentSliderIndex + 1);
    });

    // Функция для инициализации ползунка слайдера "до и после"
    function initSliderHandle(slider) {
        let handle = slider.querySelector('.slider-handle');
        let afterImage = slider.querySelector('.after-image');

        function onMouseMove(e) {
            let rect = slider.getBoundingClientRect();
            let x = e.clientX - rect.left; // Позиция курсора относительно слайдера
            let width = slider.offsetWidth;
            let newLeft = Math.max(0, Math.min(x, width));
            handle.style.left = newLeft + 'px';
            afterImage.style.clip = `rect(0, ${newLeft}px, auto, 0)`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        handle.addEventListener('mousedown', function (e) {
            e.preventDefault();
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }

    // Инициализация ползунка для первого слайдера
    initSliderHandle(sliders[0]);
});




const showPopupButton = document.getElementById("show-popup");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

showPopupButton.addEventListener("click", function () {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


var redirectButton = document.getElementById("redirectButton");

redirectButton.addEventListener("click", function () {
    window.location.href = "frametwo.html";
});



