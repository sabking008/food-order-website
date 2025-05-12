const menuItems = [
  { id: 1, name: "Corn n Cheese", price: 8 },
  { id: 2, name: "Magical Mushroom", price: 9 },
  { id: 3, name: "BBQ Blast", price: 10 },
  { id: 4, name: "Spicy Delight", price: 11 },
  { id: 5, name: "Chocolate Pizza", price: 12 }
];

function loadMenu() {
  const menuContainer = document.getElementById("menu");
  menuItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button class="add-to-cart" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
    `;
    menuContainer.appendChild(div);
  });
}

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(item.name + " added to cart.");
}

function loadCart() {
  const cartContainer = document.getElementById('cart');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price}</p>`;
    cartContainer.appendChild(div);
  });
}

function checkout() {
  alert("Order placed successfully!");
  localStorage.removeItem('cart');
  location.href = 'payment.html';
}
