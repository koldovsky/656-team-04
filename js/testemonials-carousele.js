(function () {

    const slides = [
        `   <div class="image-wrapper">
                <img class="plant-icon" src="img/testemonials/green-line.webp" alt="Green-line>            
            </div>`,
        `   <div class="image-wrapper">
                <img class="plant-icon" src="img/testemonials/green-wave.webp" alt="Green wave">
            </div>`,
        `   <div class="image-wrapper">
                <img class="plant-icon" src="img/testemonials/home-and-garden.webp" alt="Home and Garden">
            </div>`,
        `   <div class="image-wrapper">
                <img class="plant-icon" src="img/testemonials/home.webp" alt="Home">
            </div>`,
        `   <div class="image-wrapper">
                <img class="plant-icon" src="img/testemonials/planta.webp" alt="Planta">
            </div>`
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.testemonial-carousel_list');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : currentSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }

    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide + 1 >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide - 1 <= 0) currentSlide = slides.length - 1;
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.testemonial_showforward.carousel-button').addEventListener('click', nextSlide);
    document.querySelector('.testemonial_showback.carousel-button').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide)


})();