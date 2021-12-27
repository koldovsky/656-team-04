(function() {
  const slides = [
     `<article class="plants-cost_show_card">
      <p class="plants-cost_name">from $20</p>
      <h3 class="plants-cost_title">Small plants</h3>
      <p class="plants-cost_list">
      <li class="plants-cost_list_element">Money Plant</li>
      <li class="plants-cost_list_element">Bryophyllum</li>
      <li class="plants-cost_list_element">Philodendron</li>
      </p>
      <a href="#" class="btn-pricing-custom-order">CUSTOM ORDER</a>
    </article>`,
    `<article class="plants-cost_show_card">
      <p class="plants-cost_name">from $30</p>
      <h3 class="plants-cost_title">Succulents</h3>
      <p class="plants-cost_list">
      <li class="plants-cost_list_element">Graptosedum</li>
      <li class="plants-cost_list_element">Elephant bush</li>
      <li class="plants-cost_list_element">Crassula ovata</li>
      </p>
      <a href="#" class="btn-pricing-custom-order">CUSTOM ORDER</a>
    </article>`,
    `<article class="plants-cost_show_card">
      <p class="plants-cost_name">from $20</p>
      <h3 class="plants-cost_title">Trees</h3>
      <p class="plants-cost_list">
      <li class="plants-cost_list_element">Raphis Palm</li>
      <li class="plants-cost_list_element">Cedar pine</li>
      <li class="plants-cost_list_element">Thuja</li>
      </p>
      <a href="#" class="btn-pricing-custom-order">CUSTOM ORDER</a>
    </article>`,
    `<article class="plants-cost_show_card">
      <p class="plants-cost_name">from $25</p>
      <h3 class="plants-cost_title">Big plants</h3>
      <p class="plants-cost_list">
      <li class="plants-cost_list_element">Dracaena</li>
      <li class="plants-cost_list_element">Dieffenbachia</li>
      <li class="plants-cost_list_element">Rubber Tree</li>
      </p>
      <a href="#" class="btn-pricing-custom-order">CUSTOM ORDER</a>
    </article>`
  ];

  let currentSlide = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector('.plants-pricing-carousel__slide');
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

  document.querySelector('.plants-pricing.carousel_button_forward').addEventListener('click', nextSlide);
  document.querySelector('.plants-pricing.carousel_button_back').addEventListener('click', prevSlide);
  window.addEventListener('resize', showCurrentSlide);
})();