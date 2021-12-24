(function () {

    const slides = [
        {
            image: "./img/header-about-us-picture/garden_icon.svg",
            name: "Plants for Garden",
            text: '"Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, both in the form of seeds, and already sprouted."'
        },
                
        {
            image: "./img/header-about-us-picture/flowerpots_icon.svg",
            name: "Sale of Flowerpots",
            text: '"Purchase flowerpots for plants of any type, from small flowers to huge palm trees. Our store offers only quality flowerpots from trusted manufacturers.”',
        },

        {
            image: "./img/header-about-us-picture/plants_icon.svg",
            name: "Soil for Plants",
            text: '"It\'s not easy to find quality soil in New York. We offer the best options for your plants. The soil we sell is decontaminated and enriched with nutrients.”',
        },

        {
            image: "../img/header-about-us-picture/food_icon.svg",
            name: "Plant Food",
            text: '"We offer everything you need to care for plants. Here you\'ll find a wide selection of fertilizers and medicinal products to combat flower diseases..”',
        },

        {
            image: "./img/header-about-us-picture/consultation_icon.svg",
            name: "Consultation",
            text: '"We not only sell plants and everything related to them but are also ready to answer any of your questions! Contact us to select the best plant!.”',
        },

        {
            image: "./img/header-about-us-picture/home_icon.svg",
            name: "Plants for Home",
            text: '"IWe offer a huge selection of flowers and evergreens that will be a joy to see for many years. A charming plant will be a great addition to the interior.”',
        }
          
    ];
        
function renderSlides(slides) {
        const slidesContainer = document.querySelector('.plant_show');
            for (const slide of slides) {
                slidesContainer.innerHTML +=
                `<article class="plant_card">
                    <div class="icon-wrapper">
                        <img src="${slide.image}" alt="Plant icon">
                    </div>
                    <h3 class="plant_card_title">${slide.name}</h3>
                    <p lass="plant_card_text">${slide.text}</p>
                    <div class="plant-btn">
                        <a href=" #" class="plant_card_btn">LEARN MORE</a>
                    </div>
                </article>`;
            }
        }

    renderSlides(slides);
})();