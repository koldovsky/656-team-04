(function () {

    const slides = [
    `<article class="plant_card">
        <div class="icon-wrapper">
            <img class="plant-icon" src="./img/header-about-us-picture/garden_icon.svg" alt="Plants for Garden">
        </div>
        <h3 class="plant_card_title">Plants for Garden</h3>
        <p class="plant_card_text">Turn your yard into a colorful lawn! Here you will find dozens of
            varieties of flowers, both in the form of seeds, and already sprouted.</p>
        <div class="plant-btn">
            <a href=" #" class="plant_card_btn">LEARN MORE</a>
        </div>
    </article>
    <article class="plant_card">
                    <div class="icon-wrapper">
                        <img class="plant-icon" src="./img/header-about-us-picture/flowerpots_icon.svg"
                            alt="Sale of Flowerpots">
                    </div>
                    <h3 class="plant_card_title">Sale of Flowerpots</h3>
                    <p class="plant_card_text">Purchase flowerpots for plants of any type, from small flowers to huge
                        palm trees. Our store offers only quality flowerpots from trusted manufacturers.</p>
                    <div class="plant-btn">
                        <a href=" #" class="plant_card_btn">LEARN MORE</a>
                    </div>
                </article>
                <article class="plant_card">
                    <div class="icon-wrapper">
                        <img class="plant-icon" src="./img/header-about-us-picture/plants_icon.svg"
                            alt="Soil for Plants">
                    </div>
                    <h3 class="plant_card_title">Soil for Plants</h3>
                    <p class="plant_card_text">It's not easy to find quality soil in New York. We offer the best options
                        for your plants. The soil we sell is decontaminated and enriched with nutrients.</p>
                    <div class="plant-btn">
                        <a href=" #" class="plant_card_btn">LEARN MORE</a>
                    </div>
                </article>
                <article class="plant_card">
                    <div class="icon-wrapper">
                        <img class="plant-icon" src="./img/header-about-us-picture/food_icon.svg" alt="Plant Food">
                    </div>
                    <h3 class="plant_card_title">Plant Food</h3>
                    <p class="plant_card_text">We offer everything you need to care for plants. Here you'll find a wide
                        selection of fertilizers and medicinal products to combat flower diseases..</p>
                    <div class="plant-btn">
                        <a href=" #" class="plant_card_btn">LEARN MORE</a>
                    </div>
                </article>
                <article class="plant_card">
                    <div class="icon-wrapper">
                        <img class="plant-icon" src="./img/header-about-us-picture/consultation_icon.svg"
                            alt="Consultation">
                    </div>
                    <h3 class="plant_card_title">Consultation</h3>
                    <p class="plant_card_text">We not only sell plants and everything related to them but are also ready
                        to answer any of your questions! Contact us to select the best plant!</p>
                    <div class="plant-btn">
                        <a href=" #" class="plant_card_btn">LEARN MORE</a>
                    </div>
                </article>
                <article class="plant_card">
                    <div class="icon-wrapper">
                        <img class="plant-icon" src="./img/header-about-us-picture/home_icon.svg"
                            alt="Plants for Home icon">
                    </div>
                    <h3 class="plant_card_title">Plants for Home</h3>
                    <p class="plant_card_text">We offer a huge selection of flowers and evergreens that will be a joy to
                        see for many years. A charming plant will be a great addition to the interior.</p>
                    <div class="plant-btn">
                        <a href=" #" class="plant_card_btn">LEARN MORE</a>
                    </div>
                </article>`
    ];

    let currentSlide = 0;

    function showCurrentSlide(){
        const slideContainer = document.querySelector('.plant_show container');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide(){

    }
})();