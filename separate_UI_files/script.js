let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    showCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${index + 1}. ${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCart();
}

function toggleCart() {
    const shoppingCart = document.getElementById("shoppingCart");
    shoppingCart.style.display =
        shoppingCart.style.display === "none" || shoppingCart.style.display === ""
            ? "block"
            : "none";
}

function closeCart() {
    const shoppingCart = document.getElementById("shoppingCart");
    shoppingCart.style.display = "none";
}

function showCart() {
    const shoppingCart = document.getElementById("shoppingCart");
    shoppingCart.style.display = "block";
}
