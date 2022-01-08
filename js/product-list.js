class ProductList {
    constructor(cart) {
        this.cart = cart;
        this.container = document.querySelector('.products-container');
        this.productService = new ProductsService();
        this.productService
            .getProducts()
            .then(() => this.renderProducts())
            .then(() => this.addEventListeners());
        this.addEventListeners();
    }
    async renderProducts() {
        let productListDomString = '';
        const products = await this.productService.getProducts();
        [...products]
            .forEach(product => {
                productListDomString +=     `<div class="pick-of-the-month__card">
                                                <div class="card product">
                                                 <img class="card-img-top" src="${product.image}" alt="${product.title}">
                                                    <div class="card-body">
                                                        <h4 class="card-title">${product.title}</h4>
                                                        <p class = "card-price">$${product.price}</p>
                                                        <button class="btn buy" data-id="${product.id}">ORDER NOW </button>
                                                    </div>
                                                </div>
                                            </div>`;
            });
        this.container.innerHTML = productListDomString;
    }
    async addEventListeners() {
        document
            .querySelectorAll(
                '.card.product button.buy'
            )
            .forEach(button =>
                button.addEventListener('click', event =>
                    this.handleProductBuyClick(event)
                )
            );
        document.querySelector('.sort-asc').addEventListener('click', async () => {
            this.sortDirection = 'ascending';
            await this.renderProducts();
            this.addEventListeners();
        });
        document.querySelector('.sort-desc').addEventListener('click', async () => {
            this.sortDirection = 'descending';
            await this.renderProducts();
            this.addEventListeners();
        });
    }
    handleProductBuyClick(event) {
        const button = event.target;
        const id = button.dataset.id;
        this.cart.addProduct(id);
    }
}