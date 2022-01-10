(async function () {
    const response = await fetch('plants-evergreen.json');
    const products = await response.json();
  
    function renderProducts(products) {
      const productsContainer = document.querySelector('.evergreen__items');
      for (const product of products) {
        productsContainer.innerHTML +=
          `<div class="fsn-featured__item">
          <img src="${product.image}" alt="${product.id}">
          <span>${product.title}</span>
          <strong>$${product.price}</strong>
          <button data-id="${product.id}" type="submit">
              ADD TO CART
          </button>
          </div>`;
      }
    }
    renderProducts(products);
  })();