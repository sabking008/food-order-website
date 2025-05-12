
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}

function loadCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('total');
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach(({ item, price }) => {
        cartItemsDiv.innerHTML += `<p>${item} - ₹${price}</p>`;
        total += price;
    });

    totalDiv.innerHTML = `<h3>Total: ₹${total}</h3>`;
}

function checkout() {
    window.location.href = "payment.html";
}

if (window.location.pathname.includes("cart.html")) {
    window.onload = loadCart;
}
