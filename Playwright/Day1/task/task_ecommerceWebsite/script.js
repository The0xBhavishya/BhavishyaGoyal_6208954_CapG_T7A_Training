function addToCart(name, price) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
}
function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    var cartDiv = document.getElementById("cartItems");
    if (cartDiv) {
        cartDiv.innerHTML = "";
        cart.forEach(function (item, index) {
            cartDiv.innerHTML += "\n                <p>".concat(item.name, " - \u20B9").concat(item.price, "</p>\n            ");
        });
    }
}
