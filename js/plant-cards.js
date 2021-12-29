(function () {
const cards = [
    {
        title: "Small Ornamental Plants",
        description: "Such plants will fit on any windowsill, decorate your home or work table. Chlorophytum, money plants, aglaonema are not demanding in care but very beautiful.",
        image: "img/our-plants-pictures/small-ornamental-plants.webp"
    },
    {
        title: "Indoor Trees",
        description: "It's a beautiful and original option for a large room. A small indoor tree will add some zest to the office or a large living room. Large dracaena, ficus, alocasia will be a great option for your space.",
        image: "img/our-plants-pictures/indoor-trees.webp",
        image_id: "plants_indortrees"
    },
    {
        title: "Plants in Florarium",
        description: "These are neatly planted compositions of succulents, grassroots, decorative ferns. Plants are selected so that they are in perfect harmony. Order your unique set of plants!",
        image: "img/our-plants-pictures/plants-in-florarium.webp",
        image_id: "plants_inflorarium"
    },
    {
        title: "Big Ornamental Plants",
        description: "Charming pachypodium, yucca, monstera will become a stunning decoration of your room or office. These plants will make a great impression on your guests.",
        image: "img/our-plants-pictures/big-ornamental-plants.webp",
        image_id: "plants_bigornamental"
    }
];
function renderCards(cards) {
    const cardsContainer = document.querySelector('.plants_show');
    for (const card of cards) {
        cardsContainer.innerHTML +=
        `<article class="plants_show_card">
        <div class="plants_show_container">
            <img id="${card.image_id}" class="plants_show_pictures" src="${card.image}" alt="${card.title}">
        </div>
        <h3 class="plants_show_name">${card.title}</h3>
        <p class="plants_show_description">${card.description}</p>
    </article>`;
    }
}
renderCards(cards);
})();