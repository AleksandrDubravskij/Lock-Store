// Первый слайдер
let currentSlideIndex1 = 0;

function prevSlide1() {
    currentSlideIndex1--;
    if (currentSlideIndex1 < 0) {
        currentSlideIndex1 = 2; // Здесь 2 - количество слайдов минус 1
    }
    showSlide1();
}

function nextSlide1() {
    currentSlideIndex1++;
    if (currentSlideIndex1 > 2) {
        currentSlideIndex1 = 0;
    }
    showSlide1();
}

function goToSlide1(index) {
    currentSlideIndex1 = index;
    showSlide1();
}

function showSlide1() {
    const slider1 = document.getElementById('slider1');
    const slides1 = slider1.querySelectorAll('.slide');
    const sliderWidth1 = slider1.clientWidth;

    slider1.style.transform = `translateX(-${currentSlideIndex1 * sliderWidth1}px)`;

    const dots1 = document.querySelectorAll('.dot.dot1');
    dots1.forEach((dot, index) => {
        if (index === currentSlideIndex1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Второй слайдер
let currentSlideIndex2 = 0;

function prevSlide2() {
    currentSlideIndex2--;
    if (currentSlideIndex2 < 0) {
        currentSlideIndex2 = 2; // Здесь 2 - количество слайдов минус 1
    }
    showSlide2();
}

function nextSlide2() {
    currentSlideIndex2++;
    if (currentSlideIndex2 > 2) {
        currentSlideIndex2 = 0;
    }
    showSlide2();
}

function goToSlide2(index) {
    currentSlideIndex2 = index;
    showSlide2();
}

function showSlide2() {
    const slider2 = document.getElementById('slider2');
    const slides2 = slider2.querySelectorAll('.slide');
    const sliderWidth2 = slider2.clientWidth;

    slider2.style.transform = `translateX(-${currentSlideIndex2 * sliderWidth2}px)`;

    const dots2 = document.querySelectorAll('.dot.dot2');
    dots2.forEach((dot, index) => {
        if (index === currentSlideIndex2) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Инициализация активного слайда при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showSlide1();
    showSlide2();
});

document.addEventListener('DOMContentLoaded', function() {
    const catalogLink = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    catalogLink.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        dropdownMenu.classList.toggle('show'); // Переключаем класс для показа/скрытия списка
    });

    // Закрыть список при клике вне него
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown > a')) {
            dropdownMenu.classList.remove('show');
        }
    });
});
 
document.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        console.log('Mobile menu toggled'); // Для проверки
    });
});

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
    console.log('Mobile menu toggled'); // Для проверки
}
