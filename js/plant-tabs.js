
(async function () {

  let category;

  
const cards = [
  {
      "id": "Floral Moss",
      "title": "Floral Moss",
      "image": "img/shop-basket-pictures/floral-moss.png",
      "price": 33.00,
      "category": "evergreen"
  },
  {
      "id": "Areca Palm",
      "title": "Areca Palm",
      "image": "img/shop-basket-pictures/areca-palm.png",
      "price": 22.00,
      "category": "evergreen"
  },
  {
      "id": "Monstera Obliqua",
      "title": "Monstera Obliqua",
      "image": "img/shop-basket-pictures/monstera-obliqua.jpg",
      "price": 45.00,
      "category": "evergreen"
  },
  {
      "id": "Sansevieria Trifasciata",
      "title": "Sansevieria Trifasciata",
      "image": "img/shop-basket-pictures/sansevieria-trifasciata.jpg",
      "price": 36.00,
      "category": "evergreen"
  },
  {
      "id": "Graptosedum Darley",
      "title": "Graptosedum Darley",
      "image": "img/shop-basket-pictures/graptosedum-darley.png",
      "price": 32.00,
      "category": "succulents"
  },
  {
      "id": "Haworthia Venosa",
      "title": "Haworthia Venosa",
      "image": "img/shop-basket-pictures/haworthia-venosa.png",
      "price": 48.00,
      "category": "succulents"
  },
  {
      "id": "Silver Torch",
      "title": "Silver Torch",
      "image": "img/shop-basket-pictures/silver-yorch.png",
      "price": 24.00,
      "category": "succulents"
  },
  {
      "id": "Notocactus Roseoluteus",
      "title": "Notocactus Roseoluteus",
      "image": "img/shop-basket-pictures/notocactus-roseoluteus.png",
      "price": 33.00,
      "category": "succulents"
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

  
  const cardsContainer = document.querySelector('.tabs__content');
  let html = "";
  for (const card of filteredCards)
  {
   
 
      html +=
      `<article class="plants_container">
          <div class="plant-picture-wrapper">
              <img id="${card.id}" class="plants_show_pictures" src="${card.image}" alt="${card.title}">
          </div>
          <h3 class="plants_show_name">${card.title}</h3>
          <p class="plants-price">${card.price}</p>
          <button class="plant-order">ORDER NOW</button>
      </article>`;
      
  }
   cardsContainer.innerHTML = html;
}
renderCards(cards, category = "evergreen");



function removeSelectedFilterClass() {
  const buttons = document.querySelectorAll(".tabs__button");
  for (const button of buttons) {
      button.classList.remove('selected');
  }
}
document.querySelector(".evergreen_btn").addEventListener("click", (ev) => {
  removeSelectedFilterClass();
  ev.target.classList.add('selected');
  category = "evergreen";
  renderCards(cards, category);
});
document.querySelector(".succulents_btn").addEventListener("click", (ev) => {
  removeSelectedFilterClass();
  ev.target.classList.add('selected');  
  category = "succulents";
  renderCards(cards, category);
});
}
)();