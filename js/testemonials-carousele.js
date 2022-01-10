(function(){

    const slides = [
        `<article class="testemonials-card-container">
        <div class="image-wrapper">
            <img class="testemonials-icon green-line" src="img/testemonials/green-line.webp" alt="Green-line">
        </div>
        </article>`,
        `<article class="testemonials-card-container">
        <div class="image-wrapper">
            <img class="testemonials-icon" src="img/testemonials/green-wave.webp" alt="Green wave">
        </div>
        </article>`,
        `<article class="testemonials-card-container">
        <div class="image-wrapper">
            <img class="testemonials-icon" src="img/testemonials/home-and-garden.webp" alt="Home and Garden">
        </div>
        </article>`,
        `<article class="testemonials-card-container">
        <div class="image-wrapper">
            <img class="testemonials-icon" src="img/testemonials/home.webp" alt="Home">
        </div>
        </article>`,
        `<article class="testemonials-card-container">
        <div class="image-wrapper">
            <img class="testemonials-icon" src="img/testemonials/planta.webp" alt="Planta">
        </div>
        </article>`
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.testemonial-carousel_list');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1; 
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.testemonial_showforward').addEventListener('click', nextSlide);
    document.querySelector('.testemonial_showback').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);

})();
