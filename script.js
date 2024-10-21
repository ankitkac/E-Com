// Product Data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 39.99, image: "product3.jpg" },
    { id: 4, name: "Product 4", price: 49.99, image: "product4.jpg" }
];

const productContainer = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
let cart = [];

// Display Products
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productDiv);
});

// Add Product to Cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    cart.push(product);
    cartCount.textContent = cart.length;
    alert(`${product.name} has been added to your cart!`);
}
