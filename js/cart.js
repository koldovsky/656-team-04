class Cart {
  constructor() {
    this.productService = new ProductsService();
    this.cartContainer = document.querySelector('#cart-module');
    this.cart = JSON.parse(localStorage['cart'] || '{}');
    this.addEventListeners();
    this.updateBadge();
  }
  addEventListeners() {
    document
      .querySelector('.cart__link-module')
      .addEventListener('click', () => this.renderCart());
    this.cartContainer
      .querySelector('.order')
      .addEventListener('click', ev => this.order(ev));
  }
  saveCart() {
    localStorage['cart'] = JSON.stringify(this.cart);
  }
  async renderCart() {
    let total = 0;
    let cartDomSting = `
        <div class="product__data-type">
        <div class="data-type__item"><strong>Product</strong></div>
        <div class="data-type__item"><strong>Price</strong></div>
        <div class="data-type__item"><strong>Quantity</strong></div>
        </div>
        `;
    for (const id in this.cart) {
      const product = await this.productService.getProductById(id);
      total += product.price * this.cart[id];
      cartDomSting += `
        <div class="product__list" data-id="${id}">
        <div class="list__item">$${product.price}</div>
        <div class="list__item-quantity">
        <div class="list__quantity">${this.cart[id]}</div>
        <div class="list__buttom"><button data-id=${id} class="plus">+</button></div>
        <div class="list__buttom"><button data-id=${id} class="minus">-</button></div>
        </div>
        </div>`;
    }
    cartDomSting += `
        <div class="product__total-sum">
        <div class=""><strong>TOTAL</strong></div>
        <div class=""><strong>$${total.toFixed(2)}</strong></div>
        </div>`;
    this.cartContainer.querySelector(
      '.popup__product'
    ).innerHTML = cartDomSting;
    this.cartContainer
      .querySelectorAll('.plus')
      .forEach(el =>
        el.addEventListener('click', ev =>
          this.changeQuantity(ev, this.addProduct)
        )
      );
    this.cartContainer
      .querySelectorAll('.minus')
      .forEach(el =>
        el.addEventListener('click', ev =>
          this.changeQuantity(ev, this.deleteProduct)
        )
      );
  }
  changeQuantity(ev, operation) {
    const button = ev.target;
    const id = button.dataset.id;
    operation.call(this, id);
    this.renderCart();
  }
  addProduct(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.saveCart();
    this.updateBadge();
  }
  deleteProduct(id) {
    if (this.cart[id] > 1) {
      this.cart[id] -= 1;
    } else {
      delete this.cart[id];
    }
    this.saveCart();
    this.updateBadge();
  }
  async updateBadge() {
    const { count, cost } = await this.cartLengthAndCost();
    document.querySelector('#cart-badge-information').innerText = `$${cost.toFixed(2)}`;
    if (count === 0) {
      document.querySelector("#cart-icon > a").classList.add('cart-none');
    } else {
      document.querySelector("#cart-icon > a").classList.remove('cart-none');
    }
  }
  async cartLengthAndCost() {
    // return Object.keys(this.cart).length;
    let count = 0;
    let cost = 0;
    // const productService = new ProductsService();
    for (const key in this.cart) {
      const product = await this.productService.getProductById(key);
      const quantity = this.cart[key];
      count += quantity;
      cost += quantity * product.price;
    }
    return {
      count, cost
    };
  }
  async order(ev) {
    if ((await this.cartLengthAndCost()).count === 0) {
      window.showAlert('Please choose products to order', false);
      return;
    }
    const form = this.cartContainer.querySelector('.cart-form__body');
    if (form.checkValidity()) {
      ev.preventDefault();
      fetch('order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientName: document.querySelector('#client-name').value,
          clientEmail: document.querySelector('#client-email').value,
          cart: this.cart
        })
      })
        .then(response => {
          if (response.status === 200) {
            return response.text();
          } else {
            throw new Error('Cannot send form');
          }
        })
        .then(responseText => {
          form.reset();
          this.cart = {};
          this.saveCart();
          this.updateBadge();
          this.renderCart();
          window.showAlert('Thank you! ' + responseText);
        })
        .catch(error => showAlert('There is an error: ' + error, false));
    } else {
      window.showAlert('Please fill form correctly', false);
    }
  }
}