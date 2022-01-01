
(async function () {

    let category;

    
const cards = [
    {
        title: "Small Ornamental Plants",
        description: "Such plants will fit on any windowsill, decorate your home or work table. Chlorophytum, money plants, aglaonema are not demanding in care but very beautiful.",
        image: "img/our-plants-pictures/small-ornamental-plants.webp",
        category:"indoor"
    },
    {
        title: "Indoor Trees",
        description: "It's a beautiful and original option for a large room. A small indoor tree will add some zest to the office or a large living room. Large dracaena, ficus, alocasia will be a great option for your space.",
        image: "img/our-plants-pictures/indoor-trees.webp",
        image_id: "plants_indortrees",
        category:"indoor"
    },
    {
        title: "Plants in Florarium",
        description: "These are neatly planted compositions of succulents, grassroots, decorative ferns. Plants are selected so that they are in perfect harmony. Order your unique set of plants!",
        image: "img/our-plants-pictures/plants-in-florarium.webp",
        image_id: "plants_inflorarium",
        category:"indoor"
    },
    {
        title: "Big Ornamental Plants",
        description: "Charming pachypodium, yucca, monstera will become a stunning decoration of your room or office. These plants will make a great impression on your guests.",
        image: "img/our-plants-pictures/big-ornamental-plants.webp",
        image_id: "plants_bigornamental",
        category:"indoor"
    },
    {
        title: "Outdoor Flowers",
        description: "Flowers form the basis of the exterior and are the first to catch the eye. Charming anemones, freesia, lilies will provide brightness and a pleasant aroma. Choose your outdoor flower!",
        image: "img/our-plants-pictures/outdoor-flowers.webp",
        image_id: "plants_outdoorflowers",
        category:"outdoor"
    },
    {
        title: "Succulents",
        description: "Succulents do not require constant care, perfectly take root in any yard, look nice, and stylish. We will help you to create the optimal composition of succulents in your garden.",
        image: "img/our-plants-pictures/succulents.webp",
        image_id: "plants_succulents",
        category:"outdoor"
    },
    {
        title: "Decorative Moss",
        description: "Decorative moss and lichen will make the garden truly special. Thanks to their density, coloring, and appearance, you can create a unique picture on the site.",
        image: "img/our-plants-pictures/decorative-moss.webp",
        image_id: "plants_decorativemoss",
        category:"outdoor"
    },
    {
        title: "Decorative Conifers",
        description: "The real decoration of any yard is decorative coniferous trees. Thuja, mountain pines, cedar pines will charm anyone! These are unpretentious, but very beautiful trees.",
        image: "img/our-plants-pictures/decorative-conifers.webp",
        image_id: "plants_decorativeconifers",
        category:"outdoor"
    }
];

function renderCards(cards, category) {

    const filteredCards = cards.filter((card) => {
        if (category) {
          return category === card.category;
        } else {
          return true;
        }
    }); 

    
    const cardsContainer = document.querySelector('.plants_show');
    let html = "";
    for (const card of filteredCards)
    {
     
   
        html +=
        `<article class="plants_show_card">
            <div class="plants_show_container">
                <img id="${card.image_id}" class="plants_show_pictures" src="${card.image}" alt="${card.title}">
            </div>
            <h3 class="plants_show_name">${card.title}</h3>
            <p class="plants_show_description">${card.description}</p>
        </article>`;
        
    }
     cardsContainer.innerHTML = html;
}
renderCards(cards, category = "indoor");



function removeSelectedFilterClass() {
    const buttons = document.querySelectorAll(".plants_location_button");
    for (const button of buttons) {
        button.classList.remove('selected');
    }
}
document.querySelector(".indoor_btm").addEventListener("click", (ev) => {
    removeSelectedFilterClass();
    ev.target.classList.add('selected');
    category = "indoor";
    renderCards(cards, category);
  });
  document.querySelector(".outdoor_btm").addEventListener("click", (ev) => {
    removeSelectedFilterClass();
    ev.target.classList.add('selected');  
    category = "outdoor";
    renderCards(cards, category);
  });
}
)();