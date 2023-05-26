const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

/* =================================================================================== */

function nextSlide() {
    currentSlide++;
    if (currentSlide >= carouselSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}



setInterval(nextSlide, 4000);


/* =================================================================================== */


window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var logo = document.getElementById("logo");
    var scrolled = window.scrollY > 0;

    nav.classList.toggle('scrolled', scrolled);

});